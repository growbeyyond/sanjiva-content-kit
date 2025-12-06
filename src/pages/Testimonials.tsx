import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, Heart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import SEO from "@/components/SEO";

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
          name: formData.anonymous ? "Anonymous" : formData.name,
          condition: formData.condition,
          testimonial: formData.story,
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
      console.error('Error submitting testimonial:', error);
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
      name: "Sravani M.",
      condition: "PCOS & Emotional Wellness",
      rating: 5,
      text: "For the first time, I felt seen as a woman, not a symptom. Dr. Prasanna's approach healed not just my PCOS but my relationship with my body.",
      location: "Hyderabad",
      featured: true
    },
    {
      name: "Lakshmi R.",
      condition: "Thyroid Disorder",
      rating: 5,
      text: "After 3 years of thyroid medicines with no real improvement, I came to Dr. Prasanna. Within 6 months, my TSH levels normalized, and I'm now completely medicine-free! ThyroCure truly works.",
      location: "Hyderabad"
    },
    {
      name: "Anjali & Karthik",
      condition: "Infertility",
      rating: 5,
      text: "We were told IVF was our only option after trying for 4 years. Dr. Prasanna gave us hope with homeopathy. We conceived naturally after 8 months of treatment. Forever grateful!",
      location: "Secunderabad"
    },
    {
      name: "Priya S.",
      condition: "Chronic Migraine",
      rating: 5,
      text: "My migraines were ruining my life — couldn't work, couldn't enjoy time with family. Within three months of treatment, they vanished completely. Best decision I ever made!",
      location: "Kukatpally"
    },
    {
      name: "Rajesh M.",
      condition: "Psoriasis",
      rating: 5,
      text: "Suffered from psoriasis for 10 years. Dr. Prasanna's treatment not only cleared my skin but also addressed my stress levels. I feel like a new person.",
      location: "Gachibowli"
    },
    {
      name: "Divya K.",
      condition: "PCOD",
      rating: 5,
      text: "My PCOD symptoms were severe — irregular periods, weight gain, acne. After 5 months with Dr. Prasanna, everything is balanced. No more hormonal chaos!",
      location: "Begumpet"
    },
    {
      name: "Suresh B.",
      condition: "Chronic Sinusitis",
      rating: 5,
      text: "No more allergies, no more constant congestion! After years of antihistamines and sprays, homeopathy finally gave me lasting relief.",
      location: "Ameerpet"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Patient Success Stories - Dr. Prasanna Boddupally",
    "description": "Real patient testimonials and success stories from Dr. Prasanna Boddupally's homeopathy clinic in Hyderabad.",
    "review": testimonials.map(t => ({
      "@type": "Review",
      "author": { "@type": "Person", "name": t.name },
      "reviewBody": t.text,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": t.rating,
        "bestRating": 5
      }
    }))
  };

  return (
    <>
      <SEO 
        title="Patient Success Stories & Testimonials | Dr. Prasanna Boddupally - Hyderabad"
        description="Read real success stories from patients treated by Dr. Prasanna Boddupally. PCOS cured, thyroid normalized, infertility overcome through homeopathy. 5000+ women helped."
        keywords="homeopathy testimonials, PCOS success stories, thyroid treatment reviews, Dr Prasanna reviews, patient testimonials Hyderabad, homeopathy success"
        canonicalUrl="https://drprasannaboddupally.in/testimonials"
        structuredData={structuredData}
      />
      <Navigation />
      <main className="min-h-screen">
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient-bright">Healing Stories</span> That Inspire Hope
              </h1>
              <p className="text-xl text-foreground/80">
                Real stories from women who found their path to hormonal balance
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Featured Testimonial */}
            <div className="max-w-4xl mx-auto mb-16">
              <Card className="p-8 bg-gradient-hero text-primary-foreground border-none shadow-glow">
                <div className="flex items-center justify-center mb-4">
                  <Heart className="w-12 h-12 fill-current" />
                </div>
                <blockquote className="text-2xl md:text-3xl text-center font-bold italic mb-6">
                  "For the first time, I felt seen as a woman, not a symptom."
                </blockquote>
                <div className="text-center">
                  <p className="font-semibold text-lg">— Sravani M.</p>
                  <p className="text-sm opacity-90">PCOS & Emotional Wellness</p>
                </div>
              </Card>
            </div>

            {/* Written Testimonials */}
            <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
              More Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.filter(t => !t.featured).map((testimonial, index) => (
                <Card key={index} className="p-6 hover:shadow-soft transition-all duration-300">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-foreground mb-4 italic">"{testimonial.text}"</blockquote>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.condition}</p>
                    <p className="text-xs text-foreground/60 mt-1">{testimonial.location}</p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="max-w-2xl mx-auto mt-16 p-8 bg-primary-light rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4 text-primary">Proven Results</h2>
              <p className="text-foreground text-lg">
                <strong>90% success rate</strong> in treating thyroid disorders and infertility cases
              </p>
              <p className="text-foreground/80 mt-2">
                Based on 10+ years of clinical practice with 5000+ patients
              </p>
            </div>

            {/* Share Your Journey Section */}
            <div className="max-w-3xl mx-auto mt-16">
              <Card className="p-8 shadow-card">
                <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
                  Share Your Journey
                </h2>
                <p className="text-center text-foreground/80 mb-8">
                  Your story could inspire another woman on her healing journey. Share anonymously if you prefer.
                </p>

                {!showForm ? (
                  <div className="text-center">
                    <Button 
                      onClick={() => setShowForm(true)}
                      className="bg-gradient-hero shadow-soft"
                      size="lg"
                    >
                      Share Your Story
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Name *</label>
                      <Input
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        placeholder="Enter your name"
                        required={!formData.anonymous}
                        maxLength={100}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Condition Treated *</label>
                      <Input
                        value={formData.condition}
                        onChange={(e) => setFormData(prev => ({ ...prev, condition: e.target.value }))}
                        placeholder="e.g., PCOS, Thyroid, Infertility"
                        required
                        maxLength={100}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Your Story *</label>
                      <Textarea
                        value={formData.story}
                        onChange={(e) => setFormData(prev => ({ ...prev, story: e.target.value }))}
                        placeholder="Share your healing journey, how treatment helped you, and what changed in your life..."
                        rows={6}
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
                      <label htmlFor="anonymous" className="text-sm text-foreground/80">
                        Post anonymously
                      </label>
                    </div>
                    <div className="flex gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowForm(false)}
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 bg-gradient-hero"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Story"}
                      </Button>
                    </div>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Testimonials;