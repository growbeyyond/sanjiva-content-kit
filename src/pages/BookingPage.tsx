import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import AppointmentCalendar from "@/components/AppointmentCalendar";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Helmet } from "react-helmet-async";
import { format } from "date-fns";
import { z } from "zod";

// Booking form validation schema
const bookingSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be less than 100 characters" })
    .regex(/^[a-zA-Z\s'.,-]+$/, { message: "Name contains invalid characters" }),
  phone: z.string()
    .trim()
    .min(10, { message: "Phone number must be at least 10 digits" })
    .max(15, { message: "Phone number is too long" })
    .regex(/^[\d\s+()-]+$/, { message: "Invalid phone number format" }),
  email: z.string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255)
    .optional()
    .or(z.literal('')),
  condition: z.string()
    .trim()
    .min(1, { message: "Please select a condition" })
    .max(100),
  message: z.string()
    .trim()
    .max(1000, { message: "Message must be less than 1000 characters" })
    .optional()
    .or(z.literal(''))
});

const BookingPage = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    condition: "",
    message: ""
  });

  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    try {
      bookingSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setStep(2);
    } else {
      toast({
        title: "Validation Error",
        description: "Please check the form for errors",
        variant: "destructive"
      });
    }
  };

  const handleSlotSelect = (date: Date, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
  };

  const handleCalendarSubmit = async () => {
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Please select a time slot",
        description: "Choose your preferred date and time",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    try {
      const { data: appointment, error: dbError } = await supabase
        .from('appointments')
        .insert([{
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email?.trim() || null,
          condition: formData.condition.trim(),
          preferred_date: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : null,
          preferred_time: selectedTime,
          message: formData.message?.trim() || null,
          status: 'pending'
        }])
        .select()
        .single();

      if (dbError) throw dbError;

      // Book the slot
      if (selectedDate) {
        await supabase.from('appointment_slots').insert({
          date: format(selectedDate, 'yyyy-MM-dd'),
          start_time: selectedTime,
          end_time: selectedTime,
          is_available: false,
          appointment_id: appointment.id
        });
      }

      // Send confirmation email
      await supabase.functions.invoke('send-appointment-email', {
        body: {
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email?.trim() || '',
          condition: formData.condition.trim(),
          preferred_date: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : '',
          preferred_time: selectedTime,
          message: formData.message?.trim() || ''
        }
      });

      toast({
        title: "Appointment Requested!",
        description: "We'll confirm your appointment shortly.",
      });

      // Reset form
      setFormData({ name: "", phone: "", email: "", condition: "", message: "" });
      setSelectedDate(undefined);
      setSelectedTime("");
      setErrors({});
      setStep(1);
    } catch (error: any) {
      toast({
        title: "Booking failed",
        description: error.message || "Please try again",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Book Appointment - Dr. Prasanna Boddupally</title>
        <meta name="description" content="Book your homeopathy consultation with Dr. Prasanna Boddupally online. Choose your preferred date and time." />
        <link rel="canonical" href="https://drprasannaboddupally.in/book" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-subtle">
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
                Book Your Appointment
              </h1>
              <p className="text-lg text-foreground/90">
                Complete the booking process in 2 simple steps
              </p>
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center justify-center mb-8 gap-2">
              <div className={`flex items-center gap-2 ${step >= 1 ? 'text-primary' : 'text-foreground/50'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 1 ? 'border-primary bg-primary text-white' : 'border-muted'}`}>
                  1
                </div>
                <span className="hidden sm:inline">Details</span>
              </div>
              <div className={`w-12 h-0.5 ${step >= 2 ? 'bg-primary' : 'bg-muted'}`} />
              <div className={`flex items-center gap-2 ${step >= 2 ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 2 ? 'border-primary bg-primary text-white' : 'border-muted'}`}>
                  2
                </div>
                <span className="hidden sm:inline">Date & Time</span>
              </div>
            </div>

            {/* Step 1: Patient Details */}
            {step === 1 && (
              <Card className="p-8">
                <h2 className="text-2xl font-bold mb-6">Your Details</h2>
                <form onSubmit={handleDetailsSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      maxLength={100}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                      maxLength={15}
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      maxLength={255}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Choose Your Concern *</label>
                    <select
                      name="condition"
                      value={formData.condition}
                      onChange={(e) => {
                        setFormData(prev => ({ ...prev, condition: e.target.value }));
                        if (errors.condition) setErrors(prev => ({ ...prev, condition: '' }));
                      }}
                      className={`w-full px-4 py-2 rounded-md border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary ${errors.condition ? "border-destructive" : "border-input"}`}
                      required
                    >
                      <option value="">Select your primary concern</option>
                      <option value="PCOS">PCOS / Hormonal Imbalance</option>
                      <option value="Thyroid">Thyroid Issues</option>
                      <option value="Both">Both PCOS & Thyroid</option>
                      <option value="Infertility">Infertility / Reproductive Health</option>
                      <option value="Weight Management">Weight Management</option>
                      <option value="Skin & Hair">Skin & Hair Issues</option>
                      <option value="Other">Other Women's Health Concern</option>
                    </select>
                    {errors.condition && <p className="text-sm text-destructive mt-1">{errors.condition}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any additional information..."
                      rows={3}
                      maxLength={1000}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
                  </div>
                  <Button type="submit" className="w-full bg-gradient-hero">
                    Continue to Select Date & Time
                  </Button>
                </form>
              </Card>
            )}

            {/* Step 2: Date & Time Selection */}
            {step === 2 && (
              <div className="space-y-6">
                <AppointmentCalendar
                  onSelectSlot={handleSlotSelect}
                  selectedDate={selectedDate}
                  selectedTime={selectedTime}
                />
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="flex-1"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleCalendarSubmit}
                    className="flex-1 bg-gradient-hero"
                    disabled={!selectedDate || !selectedTime || isSubmitting}
                  >
                    {isSubmitting ? "Booking..." : "Confirm Appointment"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BookingPage;
