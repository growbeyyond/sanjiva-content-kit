-- Create app_role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role public.app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS policies for user_roles table
CREATE POLICY "Admins can view all roles"
ON public.user_roles
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can insert roles"
ON public.user_roles
FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete roles"
ON public.user_roles
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

-- Update appointments table RLS policies
DROP POLICY IF EXISTS "Allow authenticated to view appointments" ON public.appointments;
DROP POLICY IF EXISTS "Allow authenticated to update appointments" ON public.appointments;
DROP POLICY IF EXISTS "Allow authenticated users to view all" ON public.appointments;

CREATE POLICY "Admins can view appointments"
ON public.appointments
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update appointments"
ON public.appointments
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

-- Update contact_inquiries table RLS policies
DROP POLICY IF EXISTS "Allow authenticated to view contact inquiries" ON public.contact_inquiries;
DROP POLICY IF EXISTS "Allow authenticated to update inquiries" ON public.contact_inquiries;

CREATE POLICY "Admins can view inquiries"
ON public.contact_inquiries
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update inquiries"
ON public.contact_inquiries
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

-- Update newsletter_subscribers table RLS policies
DROP POLICY IF EXISTS "Allow authenticated to view subscribers" ON public.newsletter_subscribers;

CREATE POLICY "Admins can view subscribers"
ON public.newsletter_subscribers
FOR SELECT
USING (public.has_role(auth.uid(), 'admin'));