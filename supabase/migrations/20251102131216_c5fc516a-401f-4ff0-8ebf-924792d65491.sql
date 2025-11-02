-- Create testimonials table for user story submissions
CREATE TABLE IF NOT EXISTS public.testimonials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  condition TEXT NOT NULL,
  testimonial TEXT NOT NULL,
  is_anonymous BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'pending',
  rating INTEGER DEFAULT 5,
  location TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- Policies for testimonials
-- Anyone can view approved testimonials
CREATE POLICY "Anyone can view approved testimonials"
ON public.testimonials
FOR SELECT
USING (status = 'approved');

-- Anyone can submit testimonials
CREATE POLICY "Anyone can submit testimonials"
ON public.testimonials
FOR INSERT
WITH CHECK (true);

-- Create trigger for updating timestamps
CREATE TRIGGER update_testimonials_updated_at
BEFORE UPDATE ON public.testimonials
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();
