import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    condition: "",
    preferred_date: "",
    preferred_time: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Insert into database
      const { error: dbError } = await supabase
        .from('appointments')
        .insert([{
          name: formData.name,
          phone: formData.phone,
          email: formData.email || null,
          condition: formData.condition,
          preferred_date: formData.preferred_date || null,
          preferred_time: formData.preferred_time || null,
          message: formData.message || null,
          status: 'pending'
        }]);

      if (dbError) throw dbError;

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke('send-appointment-email', {
        body: formData
      });

      if (emailError) {
        console.error('Email notification error:', emailError);
        // Don't fail the whole process if email fails
      }

      toast({
        title: "Appointment Request Received!",
        description: "We'll contact you within 24 hours to confirm your appointment.",
      });

      setFormData({ 
        name: "", 
        phone: "", 
        email: "", 
        condition: "", 
        preferred_date: "",
        preferred_time: "",
        message: "" 
      });
    } catch (error) {
      console.error('Error submitting appointment:', error);
      toast({
        title: "Error",
        description: "Failed to submit appointment. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient-bright">Get in Touch</span> – Let's Start Your Healing Journey
              </h1>
              <p className="text-xl text-muted-foreground">
                Book your consultation and take the first step toward natural wellness
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Book Appointment</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number *
                    </label>
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
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Choose Your Concern *
                    </label>
                    <select
                      name="condition"
                      value={formData.condition}
                      onChange={(e) => setFormData(prev => ({ ...prev, condition: e.target.value }))}
                      className="w-full px-4 py-2 rounded-md border border-input bg-background text-foreground"
                      required
                    >
                      <option value="">Select your primary concern</option>
                      <option value="PCOS">PCOS</option>
                      <option value="Thyroid">Thyroid</option>
                      <option value="Both">Both PCOS & Thyroid</option>
                      <option value="Other">Other Women's Health Concern</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Preferred Date
                      </label>
                      <Input
                        name="preferred_date"
                        type="date"
                        value={formData.preferred_date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Preferred Time
                      </label>
                      <Input
                        name="preferred_time"
                        type="time"
                        value={formData.preferred_time}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message (Optional)
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Any additional information you'd like to share..."
                      rows={4}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-hero shadow-soft"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Appointment Request"}
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Let's Talk — We're Here for You
                  </p>
                  <div className="space-y-2">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary-light"
                    >
                      <a 
                        href="https://wa.me/918179942297"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </a>
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      Also available on Telegram | Email
                    </p>
                  </div>
                </div>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-4">Clinic Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Address</p>
                        <p className="text-muted-foreground text-sm">
                          Hyderabad | Online Consults Available Globally
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Phone</p>
                        <a 
                          href="tel:+918179942297" 
                          className="text-muted-foreground text-sm hover:text-primary transition-colors"
                        >
                          +91 81799 42297
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <a 
                          href="mailto:prasannaboddu@gmail.com" 
                          className="text-muted-foreground text-sm hover:text-primary transition-colors"
                        >
                          prasannaboddu@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Clinic Hours</p>
                        <p className="text-muted-foreground text-sm">
                          Monday - Saturday: 9:00 AM - 7:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-primary-light">
                  <h3 className="text-xl font-bold text-primary mb-4">What to Expect</h3>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      Detailed 30-45 minute consultation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      Personalized treatment plan
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      No food restrictions required
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      Safe for all ages
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      Regular follow-ups included
                    </li>
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">Languages Spoken</h3>
                  <p className="text-muted-foreground">
                    English • Telugu • Hindi
                  </p>
                </Card>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-12">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Find Us</h3>
                <div className="rounded-lg overflow-hidden h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.31795243015!2d78.24323209999999!3d17.412608499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Clinic Location - Hyderabad"
                  ></iframe>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
