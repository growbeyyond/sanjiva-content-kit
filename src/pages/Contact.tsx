import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TopBanner from "@/components/TopBanner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import SEO from "@/components/SEO";
import { appointmentSchema } from "@/lib/validations";
import { z } from "zod";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    condition: "",
    preferred_date: "",
    preferred_time: "",
    message: ""
  });

  const validateForm = () => {
    try {
      appointmentSchema.parse(formData);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please check the form for errors",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error: dbError } = await supabase
        .from('appointments')
        .insert([{
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email?.trim() || null,
          condition: formData.condition.trim(),
          preferred_date: formData.preferred_date || null,
          preferred_time: formData.preferred_time || null,
          message: formData.message?.trim() || null,
          status: 'pending'
        }]);

      if (dbError) throw dbError;

      const { error: emailError } = await supabase.functions.invoke('send-appointment-email', {
        body: {
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email?.trim() || '',
          condition: formData.condition.trim(),
          preferred_date: formData.preferred_date,
          preferred_time: formData.preferred_time,
          message: formData.message?.trim() || ''
        }
      });

      if (emailError) {
        console.error('Email notification error:', emailError);
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
      setErrors({});
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
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Dr. Prasanna Boddupally",
    "description": "Book your homeopathy consultation with Dr. Prasanna Boddupally in Hyderabad. Available for in-person and online consultations.",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Dr. Prasanna Boddupally Homeopathy Clinic",
      "telephone": "+916304633491",
      "email": "pcosthyrocure@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "19:00"
        }
      ]
    }
  };

  return (
    <>
      <TopBanner />
      <SEO
        title="Contact & Book Appointment | Dr. Prasanna Boddupally - Homeopathy Hyderabad"
        description="Book your consultation with Dr. Prasanna Boddupally. Available for thyroid, PCOS, and hormonal health consultations in Hyderabad. Online consultations also available."
        keywords="book appointment homeopathy, Dr Prasanna contact, homeopathy consultation Hyderabad, online homeopathy consultation, PCOS consultation, thyroid doctor appointment"
        canonicalUrl="https://drprasannaboddupally.in/contact"
        structuredData={structuredData}
      />
      <Navigation />
      <main className="min-h-screen">
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient-bright">Get in Touch</span> – Let's Start Your Healing Journey
              </h1>
              <p className="text-xl text-foreground/90">
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
                      maxLength={100}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
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
                      maxLength={15}
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
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
                      maxLength={255}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Choose Your Concern *
                    </label>
                    <select
                      name="condition"
                      value={formData.condition}
                      onChange={(e) => {
                        setFormData(prev => ({ ...prev, condition: e.target.value }));
                        if (errors.condition) setErrors(prev => ({ ...prev, condition: '' }));
                      }}
                      className={`w-full px-4 py-2 rounded-md border bg-background text-foreground ${errors.condition ? "border-destructive" : "border-input"}`}
                      required
                    >
                      <option value="">Select your primary concern</option>
                      <option value="Thyroid">Thyroid Disorders</option>
                      <option value="PCOS">PCOS/PCOD</option>
                      <option value="Both">Both Thyroid & PCOS</option>
                      <option value="Hormonal Imbalance">Other Hormonal Issues</option>
                      <option value="Other">Other Health Concern</option>
                    </select>
                    {errors.condition && <p className="text-sm text-destructive mt-1">{errors.condition}</p>}
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
                      maxLength={1000}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
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
                  <p className="text-sm text-foreground/80 text-center mb-4">
                    Prefer to connect directly? We're here for you.
                  </p>
                  <div className="space-y-2">
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary-light"
                    >
                      <a 
                        href="https://wa.me/916304633491?text=Hi%20Doctor,%20I%20want%20to%20book%20an%20appointment"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp Now
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-accent text-accent hover:bg-accent/10"
                    >
                      <a 
                        href="tel:+916304633491"
                        className="flex items-center justify-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        Call Now
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-xl font-bold text-foreground mb-4">Clinic Details</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Address</p>
                        <p className="text-foreground/80 text-sm">
                          17-1-382/P/4, Govt Press Colony, Champapet, Hyderabad - 500079
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Phone</p>
                        <a 
                          href="tel:+916304633491" 
                          className="text-foreground/80 text-sm hover:text-primary transition-colors"
                        >
                          +91 63046 33491
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <a 
                          href="mailto:pcosthyrocure@gmail.com" 
                          className="text-foreground/80 text-sm hover:text-primary transition-colors"
                        >
                          pcosthyrocure@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-foreground">Clinic Hours</p>
                        <p className="text-foreground/80 text-sm">
                          Monday - Saturday: 10:00 AM - 1:00 PM, 5:00 PM - 8:30 PM<br />
                          Sunday: 10:00 AM - 1:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-primary-light">
                  <h2 className="text-xl font-bold text-primary mb-4">What to Expect</h2>
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
                  <h2 className="text-xl font-bold text-foreground mb-2">Languages Spoken</h2>
                  <p className="text-foreground/80">
                    English • Telugu • Hindi
                  </p>
                </Card>

                {/* Consultation Types */}
                <Card className="p-6 bg-secondary">
                  <h2 className="text-xl font-bold text-foreground mb-3">Consultation Options</h2>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-background rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">In-Person Visit</p>
                        <p className="text-xs text-foreground/70">Detailed physical examination, personalized attention, same-day medicine dispensing</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 bg-background rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Online Consultation</p>
                        <p className="text-xs text-foreground/70">Video call via WhatsApp/Zoom, medicines couriered, ideal for follow-ups & distant patients</p>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Emergency Info */}
                <Card className="p-6 border-destructive/30 bg-destructive/5">
                  <h2 className="text-lg font-bold text-foreground mb-2">For Urgent Cases</h2>
                  <p className="text-sm text-foreground/80 mb-3">
                    If you're experiencing severe symptoms like difficulty breathing, severe chest pain, or thyroid storm symptoms:
                  </p>
                  <Button asChild variant="destructive" size="sm" className="w-full">
                    <a href="tel:+916304633491">Call Immediately: +91 63046 33491</a>
                  </Button>
                  <p className="text-xs text-foreground/60 mt-2 text-center">
                    For life-threatening emergencies, please visit the nearest hospital ER.
                  </p>
                </Card>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-12 max-w-6xl mx-auto">
              <Card className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4">Find Us</h2>
                <div className="rounded-lg overflow-hidden h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.31795243015!2d78.24323209999999!3d17.412608499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890123"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dr. Prasanna Boddupally Homeopathy Clinic Location - Hyderabad"
                  ></iframe>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
