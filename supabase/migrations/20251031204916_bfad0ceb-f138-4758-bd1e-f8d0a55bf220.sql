-- Create patients table for patient records
CREATE TABLE public.patients (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  full_name TEXT NOT NULL,
  date_of_birth DATE,
  gender TEXT,
  blood_group TEXT,
  medical_history TEXT,
  allergies TEXT,
  current_medications TEXT,
  emergency_contact_name TEXT,
  emergency_contact_phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id)
);

-- Create appointment_slots table for available booking times
CREATE TABLE public.appointment_slots (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  date DATE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  is_available BOOLEAN DEFAULT true,
  appointment_id UUID REFERENCES public.appointments(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(date, start_time)
);

-- Create payments table
CREATE TABLE public.payments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  appointment_id UUID REFERENCES public.appointments(id) ON DELETE CASCADE,
  patient_id UUID REFERENCES public.patients(id) ON DELETE CASCADE,
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'INR',
  payment_method TEXT,
  payment_status TEXT DEFAULT 'pending',
  transaction_id TEXT,
  payment_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create prescriptions table
CREATE TABLE public.prescriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_id UUID REFERENCES public.patients(id) ON DELETE CASCADE NOT NULL,
  appointment_id UUID REFERENCES public.appointments(id) ON DELETE CASCADE,
  diagnosis TEXT,
  medicines JSONB,
  instructions TEXT,
  follow_up_date DATE,
  prescribed_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create symptom_checker_results table
CREATE TABLE public.symptom_checker_results (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  symptoms JSONB NOT NULL,
  recommended_treatment TEXT,
  severity_level TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create gallery_images table
CREATE TABLE public.gallery_images (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  category TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create chat_messages table
CREATE TABLE public.chat_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  message TEXT NOT NULL,
  is_admin_reply BOOLEAN DEFAULT false,
  parent_message_id UUID REFERENCES public.chat_messages(id),
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.patients ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointment_slots ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.prescriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.symptom_checker_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_messages ENABLE ROW LEVEL SECURITY;

-- RLS Policies for patients
CREATE POLICY "Users can view their own patient record"
  ON public.patients FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own patient record"
  ON public.patients FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own patient record"
  ON public.patients FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all patient records"
  ON public.patients FOR SELECT
  USING (has_role(auth.uid(), 'admin'::app_role));

-- RLS Policies for appointment_slots
CREATE POLICY "Anyone can view available slots"
  ON public.appointment_slots FOR SELECT
  USING (true);

CREATE POLICY "Admins can manage appointment slots"
  ON public.appointment_slots FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role));

-- RLS Policies for payments
CREATE POLICY "Users can view their own payments"
  ON public.payments FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.patients
      WHERE patients.id = payments.patient_id
      AND patients.user_id = auth.uid()
    )
  );

CREATE POLICY "Admins can view all payments"
  ON public.payments FOR SELECT
  USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can insert payments"
  ON public.payments FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- RLS Policies for prescriptions
CREATE POLICY "Users can view their own prescriptions"
  ON public.prescriptions FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.patients
      WHERE patients.id = prescriptions.patient_id
      AND patients.user_id = auth.uid()
    )
  );

CREATE POLICY "Admins can manage prescriptions"
  ON public.prescriptions FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role));

-- RLS Policies for symptom_checker_results
CREATE POLICY "Users can view their own symptom results"
  ON public.symptom_checker_results FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert symptom results"
  ON public.symptom_checker_results FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for gallery_images
CREATE POLICY "Anyone can view active gallery images"
  ON public.gallery_images FOR SELECT
  USING (is_active = true);

CREATE POLICY "Admins can manage gallery images"
  ON public.gallery_images FOR ALL
  USING (has_role(auth.uid(), 'admin'::app_role));

-- RLS Policies for chat_messages
CREATE POLICY "Users can view their own chat messages"
  ON public.chat_messages FOR SELECT
  USING (auth.uid() = user_id OR has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Users can insert their own messages"
  ON public.chat_messages FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Admins can insert messages"
  ON public.chat_messages FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Users can update their own messages"
  ON public.chat_messages FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can update all messages"
  ON public.chat_messages FOR UPDATE
  USING (has_role(auth.uid(), 'admin'::app_role));

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_patients_updated_at
  BEFORE UPDATE ON public.patients
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();