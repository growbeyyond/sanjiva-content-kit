import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, Heart, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";

const Testimonials = () => {
  const { toast } = useToast();
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    condition: "",
    story: "",
    anonymous: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('testimonials')
        .insert([{
          name: formData.anonymous ? "Anonymous" : formData.name.trim(),
          condition: formData.condition.trim(),
          testimonial: formData.story.trim(),
          is_anonymous: formData.anonymous,
          status: 'pending'
        }]);

      if (error) throw error;

      toast({
        title: "Thank you for sharing!",
        description: "Your story will be reviewed and published soon.",
      });

      setFormData({ name: "", condition: "", story: "", anonymous: false });
      setShowForm(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const testimonials = [
    {
      name: "Lakshmi R.",
      condition: "Thyroid Disorder",
      rating: 5,
      text: "After 3 years of thyroid medicines with no real improvement, I came to Dr. Prasanna. Within 6 months, my TSH levels normalized, and I'm now completely medicine-free!",
      location: "Hyderabad"
    },
    {
      name: "Anjali & Karthik",
      condition: "Infertility",
      rating: 5,
      text: "We were told IVF was our only option after trying for 4 years. Dr. Prasanna gave us hope. We conceived naturally after 8 months of treatment!",
      location: "Secunderabad"
    },
    {
      name: "Priya S.",
      condition: "Chronic Migraine",
      rating: 5,
      text: "My migraines were ruining my life. Within three months of treatment, they vanished completely. Best decision I ever made!",
      location: "Kukatpally"
    },
    {
      name: "Divya K.",
      condition: "PCOD",
      rating: 5,
      text: "My PCOD symptoms were severe — irregular periods, weight gain, acne. After 5 months with Dr. Prasanna, everything is balanced!",
      location: "Begumpet"
    },
    {
      name: "Rajesh M.",
      condition: "Psoriasis",
      rating: 5,
      text: "Suffered from psoriasis for 10 years. Dr. Prasanna's treatment not only cleared my skin but also addressed my stress levels.",
      location: "Gachibowli"
    },
    {
      name: "Suresh B.",
      condition: "Chronic Sinusitis",
      rating: 5,
      text: "No more allergies, no more constant congestion! After years of antihistamines, homeopathy finally gave me lasting relief.",
      location: "Ameerpet"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Patient Success Stories - Dr. Prasanna Boddupally",
    "description": "Real patient testimonials and success stories.",
    "review": testimonials.map(t => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": t.name },
      "reviewBody": t.text,
      "reviewRating": { "@type": "Rating", "ratingValue": t.rating, "bestRating": 5 }
    }))
  };

  return (
    <>
      <SEO 
        title="Patient Success Stories & Testimonials | Dr. Prasanna Boddupally"
        description="Read real success stories from patients treated by Dr. Prasanna Boddupally. PCOS cured, thyroid normalized, infertility overcome through homeopathy."
        keywords="homeopathy testimonials, PCOS success stories, thyroid treatment reviews, Dr Prasanna reviews"
        canonicalUrl="https://drprasannaboddupally.in/testimonials"
        structuredData={structuredData}
      />
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-16 md:py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-hero bg-clip-text text-transparent">Success Stories</span>
              </h1>
              <p className="text-lg text-foreground/80">
                Real stories from women who found their path to hormonal balance
              </p>
            </div>
          </div>
        </section>

        {/* Featured Testimonial */}
        <section className="py-12 md:py-16 bg-gradient-hero text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 fill-current" />
              <blockquote className="text-2xl md:text-3xl font-bold italic mb-4">
                "For the first time, I felt seen as a woman, not a symptom."
              </blockquote>
              <p className="font-semibold">— Sravani M.</p>
              <p className="text-sm opacity-90">PCOS & Emotional Wellness</p>
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
              More Success Stories
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-5 hover:shadow-lg transition-all">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <blockquote className="text-foreground/80 text-sm mb-4 italic">"{testimonial.text}"</blockquote>
                  <div className="border-t border-border pt-3">
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <div className="flex justify-between text-xs">
                      <span className="text-foreground/60">{testimonial.location}</span>
                      <span className="text-primary font-medium">{testimonial.condition}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Stats */}
            <div className="max-w-xl mx-auto mt-12 p-6 bg-primary/5 rounded-xl text-center">
              <p className="text-lg text-foreground">
                <strong className="text-2xl text-primary">90%</strong> success rate in treating thyroid & infertility
              </p>
              <p className="text-sm text-foreground/70 mt-1">Based on 10+ years with 5000+ patients</p>
            </div>
          </div>
        </section>

        {/* Share Story Form */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto p-6">
              <h2 className="text-2xl font-bold text-center mb-2 text-foreground">Share Your Journey</h2>
              <p className="text-center text-foreground/70 mb-6 text-sm">
                Your story could inspire another woman on her healing journey.
              </p>

              {!showForm ? (
                <div className="text-center">
                  <Button onClick={() => setShowForm(true)} className="bg-gradient-hero">
                    Share Your Story
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Your Name</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter your name"
                      required={!formData.anonymous}
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Condition Treated</label>
                    <Input
                      value={formData.condition}
                      onChange={(e) => setFormData(prev => ({ ...prev, condition: e.target.value }))}
                      placeholder="e.g., PCOS, Thyroid, Infertility"
                      required
                      maxLength={100}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Your Story</label>
                    <Textarea
                      value={formData.story}
                      onChange={(e) => setFormData(prev => ({ ...prev, story: e.target.value }))}
                      placeholder="Share your healing journey..."
                      rows={4}
                      required
                      maxLength={1000}
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="anonymous"
                      checked={formData.anonymous}
                      onChange={(e) => setFormData(prev => ({ ...prev, anonymous: e.target.checked }))}
                      className="w-4 h-4"
                    />
                    <label htmlFor="anonymous" className="text-sm text-foreground/70">Post anonymously</label>
                  </div>
                  <div className="flex gap-3">
                    <Button type="button" variant="outline" onClick={() => setShowForm(false)} className="flex-1">
                      Cancel
                    </Button>
                    <Button type="submit" className="flex-1 bg-gradient-hero" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit Story"}
                    </Button>
                  </div>
                </form>
              )}
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Start Your Success Story</h2>
            <p className="text-lg opacity-90 mb-6 max-w-xl mx-auto">
              Join thousands of women who've transformed their health naturally.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Book Free Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Testimonials;
