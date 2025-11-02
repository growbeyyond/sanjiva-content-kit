import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import AppointmentCalendar from "@/components/AppointmentCalendar";
import PaymentGateway from "@/components/PaymentGateway";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Helmet } from "react-helmet-async";
import { format } from "date-fns";

const BookingPage = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1); // 1: Details, 2: Calendar, 3: Payment
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [appointmentId, setAppointmentId] = useState<string>("");
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    condition: "",
    message: ""
  });

  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>("");

  const consultationFee = 800; // Initial consultation fee

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSlotSelect = (date: Date, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
  };

  const handleCalendarSubmit = () => {
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Please select a time slot",
        description: "Choose your preferred date and time",
        variant: "destructive",
      });
      return;
    }
    setStep(3);
  };

  const handlePaymentSuccess = async (transactionId: string) => {
    setIsSubmitting(true);
    try {
      // Insert appointment
      const { data: appointment, error: dbError } = await supabase
        .from('appointments')
        .insert([{
          name: formData.name,
          phone: formData.phone,
          email: formData.email || null,
          condition: formData.condition,
          preferred_date: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : null,
          preferred_time: selectedTime,
          message: formData.message || null,
          status: 'confirmed' // Confirmed since paid
        }])
        .select()
        .single();

      if (dbError) throw dbError;

      // Book the slot
      if (selectedDate) {
        await supabase.from('appointment_slots').insert({
          date: format(selectedDate, 'yyyy-MM-dd'),
          start_time: selectedTime,
          end_time: selectedTime, // Could calculate end time
          is_available: false,
          appointment_id: appointment.id
        });
      }

      // Record payment
      await supabase.from('payments').insert({
        appointment_id: appointment.id,
        amount: consultationFee,
        currency: 'INR',
        payment_status: 'completed',
        transaction_id: transactionId,
        payment_date: new Date().toISOString()
      });

      // Send confirmation email
      await supabase.functions.invoke('send-appointment-email', {
        body: {
          ...formData,
          preferred_date: selectedDate ? format(selectedDate, 'yyyy-MM-dd') : '',
          preferred_time: selectedTime,
          transactionId
        }
      });

      toast({
        title: "Appointment Confirmed!",
        description: "You'll receive a confirmation email shortly.",
      });

      // Reset form
      setFormData({ name: "", phone: "", email: "", condition: "", message: "" });
      setSelectedDate(undefined);
      setSelectedTime("");
      setStep(1);

    } catch (error) {
      console.error('Error confirming appointment:', error);
      toast({
        title: "Error",
        description: "Payment received but failed to book appointment. We'll contact you.",
        variant: "destructive"
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
        <link rel="canonical" href="https://drprasanna.lovable.app/book" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-subtle">
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
                Book Your Appointment
              </h1>
              <p className="text-lg text-muted-foreground">
                Complete the booking process in 3 simple steps
              </p>
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center justify-center mb-8 gap-2">
              <div className={`flex items-center gap-2 ${step >= 1 ? 'text-primary' : 'text-muted-foreground'}`}>
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
              <div className={`w-12 h-0.5 ${step >= 3 ? 'bg-primary' : 'bg-muted'}`} />
              <div className={`flex items-center gap-2 ${step >= 3 ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${step >= 3 ? 'border-primary bg-primary text-white' : 'border-muted'}`}>
                  3
                </div>
                <span className="hidden sm:inline">Payment</span>
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
                    />
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
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Choose Your Concern *</label>
                    <select
                      name="condition"
                      value={formData.condition}
                      onChange={(e) => setFormData(prev => ({ ...prev, condition: e.target.value }))}
                      className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
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
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any additional information..."
                      rows={3}
                    />
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
                    disabled={!selectedDate || !selectedTime}
                  >
                    Continue to Payment
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Payment */}
            {step === 3 && (
              <div className="space-y-6">
                <Card className="p-6 bg-primary/5 border-primary/20">
                  <h3 className="font-semibold mb-3">Booking Summary</h3>
                  <div className="space-y-2 text-sm">
                    <p><strong>Name:</strong> {formData.name}</p>
                    <p><strong>Condition:</strong> {formData.condition}</p>
                    <p><strong>Date:</strong> {selectedDate && format(selectedDate, 'PPP')}</p>
                    <p><strong>Time:</strong> {selectedTime}</p>
                    <p className="text-lg font-bold text-primary pt-2 border-t">
                      Consultation Fee: ₹{consultationFee}
                    </p>
                  </div>
                </Card>

                <PaymentGateway
                  amount={consultationFee}
                  appointmentId={appointmentId}
                  onSuccess={handlePaymentSuccess}
                  onCancel={() => setStep(2)}
                />
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
