-- Add explicit UPDATE and DELETE policies to payments table for defense-in-depth
CREATE POLICY "Only admins can update payments"
ON payments
FOR UPDATE
USING (has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete payments"
ON payments
FOR DELETE
USING (has_role(auth.uid(), 'admin'));