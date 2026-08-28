import { NextResponse } from "next/server";
import { submitWaitlistSignup } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, skillCategory, referralSource } = body;

    // Validate inputs
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "A valid full name is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!skillCategory || typeof skillCategory !== "string") {
      return NextResponse.json(
        { success: false, message: "Skill category selection is required." },
        { status: 400 }
      );
    }

    const result = await submitWaitlistSignup({
      full_name: fullName.trim(),
      email: email.trim().toLowerCase(),
      role: "freelancer",
      skill_category: skillCategory,
      referral_source: referralSource || null,
    });

    if (!result.success) {
      if (result.isDuplicate) {
        return NextResponse.json(
          { success: false, isDuplicate: true, message: result.message },
          { status: 409 }
        );
      }
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: result.message,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error?.message || "Internal server error." },
      { status: 500 }
    );
  }
}
