-- Add SELECT policies for authenticated users to view appointments
CREATE POLICY "Allow authenticated to view appointments"
  ON appointments FOR SELECT
  TO authenticated
  USING (true);

-- Add SELECT policy for contact inquiries
CREATE POLICY "Allow authenticated to view contact inquiries"
  ON contact_inquiries FOR SELECT
  TO authenticated
  USING (true);

-- Add SELECT policy for newsletter subscribers
CREATE POLICY "Allow authenticated to view subscribers"
  ON newsletter_subscribers FOR SELECT
  TO authenticated
  USING (true);

-- Add UPDATE policy for appointments (to change status)
CREATE POLICY "Allow authenticated to update appointments"
  ON appointments FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Add UPDATE policy for contact inquiries (to change status)
CREATE POLICY "Allow authenticated to update inquiries"
  ON contact_inquiries FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);