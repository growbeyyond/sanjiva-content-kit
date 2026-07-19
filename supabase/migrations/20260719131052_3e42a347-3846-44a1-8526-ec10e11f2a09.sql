
-- 1. Revoke EXECUTE on has_role from anon and authenticated (SECURITY DEFINER exposure)
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO service_role;

-- 2. Replace overly-permissive WITH CHECK (true) INSERT policies with input-validation checks
DROP POLICY IF EXISTS "Allow public appointments insert" ON public.appointments;
CREATE POLICY "Public can submit appointments"
  ON public.appointments FOR INSERT TO anon, authenticated
  WITH CHECK (
    length(btrim(name)) BETWEEN 2 AND 100
    AND length(btrim(phone)) BETWEEN 7 AND 20
    AND length(btrim(condition)) BETWEEN 2 AND 200
    AND (email IS NULL OR (length(email) <= 200 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'))
    AND (message IS NULL OR length(message) <= 2000)
    AND status = 'pending'
  );

DROP POLICY IF EXISTS "Allow public contact insert" ON public.contact_inquiries;
CREATE POLICY "Public can submit contact inquiries"
  ON public.contact_inquiries FOR INSERT TO anon, authenticated
  WITH CHECK (
    length(btrim(name)) BETWEEN 2 AND 100
    AND length(btrim(phone)) BETWEEN 7 AND 20
    AND length(btrim(message)) BETWEEN 2 AND 2000
    AND (email IS NULL OR (length(email) <= 200 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'))
    AND (subject IS NULL OR length(subject) <= 200)
    AND status = 'new'
  );

DROP POLICY IF EXISTS "Allow public newsletter signup" ON public.newsletter_subscribers;
CREATE POLICY "Public can subscribe to newsletter"
  ON public.newsletter_subscribers FOR INSERT TO anon, authenticated
  WITH CHECK (
    length(email) BETWEEN 5 AND 200
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND active = true
  );

DROP POLICY IF EXISTS "Anyone can submit testimonials" ON public.testimonials;
CREATE POLICY "Public can submit testimonials for moderation"
  ON public.testimonials FOR INSERT TO anon, authenticated
  WITH CHECK (
    length(btrim(name)) BETWEEN 2 AND 100
    AND length(btrim(condition)) BETWEEN 2 AND 200
    AND length(btrim(testimonial)) BETWEEN 10 AND 2000
    AND (rating IS NULL OR (rating BETWEEN 1 AND 5))
    AND (location IS NULL OR length(location) <= 100)
    AND status = 'pending'
  );

-- 3. Admin DELETE policies for tables that lack them
CREATE POLICY "Admins can delete contact inquiries"
  ON public.contact_inquiries FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can delete newsletter subscribers"
  ON public.newsletter_subscribers FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can delete testimonials"
  ON public.testimonials FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can delete symptom results"
  ON public.symptom_checker_results FOR DELETE TO authenticated
  USING (public.has_role(auth.uid(), 'admin'::public.app_role));

-- 4. appointment_slots: restrict public reads to available slots and hide appointment_id column from anon/authenticated
DROP POLICY IF EXISTS "Anyone can view available slots" ON public.appointment_slots;
CREATE POLICY "Anyone can view available slots"
  ON public.appointment_slots FOR SELECT TO anon, authenticated
  USING (is_available = true);

REVOKE SELECT (appointment_id) ON public.appointment_slots FROM anon, authenticated;
