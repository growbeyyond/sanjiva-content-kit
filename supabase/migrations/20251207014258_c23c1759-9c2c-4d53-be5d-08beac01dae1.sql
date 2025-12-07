-- Fix: Block anonymous users from reading appointment data
-- The RESTRICTIVE policy with has_role() doesn't properly block anonymous users
-- because auth.uid() returns NULL for unauthenticated requests

-- Drop the existing admin-only SELECT policy
DROP POLICY IF EXISTS "Admins can view appointments" ON public.appointments;

-- Create a new PERMISSIVE policy that properly requires authentication AND admin role
CREATE POLICY "Admins can view appointments"
  ON public.appointments
  FOR SELECT
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Also add explicit admin-only DELETE policy for completeness
CREATE POLICY "Admins can delete appointments"
  ON public.appointments
  FOR DELETE
  TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));