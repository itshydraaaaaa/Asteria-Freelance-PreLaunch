import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { WaitlistRecord } from "./types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Check if credentials are properly configured
export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes("your-project.supabase.co")
);

// Lazily initialized singleton client
let clientInstance: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient | null {
  if (!isSupabaseConfigured) {
    return null;
  }
  if (!clientInstance) {
    clientInstance = createClient(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: false },
    });
  }
  return clientInstance;
}

export type SubmitResult = {
  success: boolean;
  isDuplicate?: boolean;
  message?: string;
};

/**
 * Inserts a new waitlist record into Supabase waitlist_signups table.
 * If credentials are not set (e.g. initial dev preview), simulates successful persistence with a small delay.
 */
export async function submitWaitlistSignup(
  data: Omit<WaitlistRecord, "id" | "created_at">
): Promise<SubmitResult> {
  const client = getSupabaseClient();

  // If Supabase is not configured yet, gracefully simulate response
  if (!client) {
    console.warn(
      "Supabase environment variables not configured. Storing in preview mock state."
    );
    await new Promise((resolve) => setTimeout(resolve, 800));
    return {
      success: true,
      message: "Preview mode: Signup recorded locally.",
    };
  }

  try {
    const { error } = await client.from("waitlist_signups").insert([
      {
        full_name: data.full_name.trim(),
        email: data.email.toLowerCase().trim(),
        role: data.role || "freelancer",
        skill_category: data.skill_category,
        referral_source: data.referral_source || null,
      },
    ]);

    if (error) {
      // 23505 is PostgreSQL unique constraint violation code
      if (error.code === "23505" || error.message.toLowerCase().includes("unique")) {
        return {
          success: false,
          isDuplicate: true,
          message: "You are already registered on the founding waitlist! We will notify you at launch.",
        };
      }
      return {
        success: false,
        message: error.message || "Failed to submit. Please try again.",
      };
    }

    return {
      success: true,
      message: "Successfully joined the Founding Freelancer Cohort!",
    };
  } catch (err: any) {
    return {
      success: false,
      message: err?.message || "An unexpected network error occurred.",
    };
  }
}
