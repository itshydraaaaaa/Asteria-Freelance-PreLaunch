-- ==============================================================================
-- Asteria Freelance — Pre-Launch Waitlist Table & Security Policies
-- ==============================================================================

-- 1. Create table
CREATE TABLE IF NOT EXISTS public.waitlist_signups (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    full_name TEXT NOT NULL,
    email TEXT NOT NULL,
    role TEXT NOT NULL DEFAULT 'freelancer',
    skill_category TEXT NOT NULL,
    referral_source TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now())
);

-- 2. Create unique case-insensitive index on email to prevent duplicate entries
CREATE UNIQUE INDEX IF NOT EXISTS waitlist_signups_email_lower_idx 
ON public.waitlist_signups (lower(trim(email)));

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.waitlist_signups ENABLE ROW LEVEL SECURITY;

-- 4. Create Public Insert-Only Policy (Allows anonymous visitors to join waitlist)
DROP POLICY IF EXISTS "Allow anonymous waitlist signups" ON public.waitlist_signups;
CREATE POLICY "Allow anonymous waitlist signups" 
ON public.waitlist_signups 
FOR INSERT 
TO anon, authenticated
WITH CHECK (
    -- Basic validation: email must contain @ and length checks
    length(email) <= 255 AND 
    email LIKE '%@%.%' AND
    length(full_name) >= 2 AND
    length(full_name) <= 100
);

-- 5. Prevent public reading of signups (Protect freelancer privacy)
-- Only service_role or admin dashboards can select/view the waitlist
DROP POLICY IF EXISTS "Deny public select" ON public.waitlist_signups;
-- Default RLS denies select if no policy is created for anon.

-- 6. Grant insert permission to anon and authenticated roles
GRANT INSERT ON TABLE public.waitlist_signups TO anon, authenticated;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;
