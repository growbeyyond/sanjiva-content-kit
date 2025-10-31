import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Lakshmi R.",
      condition: "Thyroid Disorder",
      rating: 5,
      text: "After 3 years of thyroid medicines with no real improvement, I came to Dr. Prasanna. Within 6 months, my TSH levels normalized, and I'm now completely medicine-free! The Sanjiva Protocol truly works.",
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

  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Real Stories of Healing & Hope
              </h1>
              <p className="text-xl text-muted-foreground">
                Discover how the Sanjiva Protocol transformed lives
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 hover:shadow-soft transition-all duration-300">
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.condition}</p>
                    <p className="text-xs text-muted-foreground mt-1">{testimonial.location}</p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="max-w-2xl mx-auto mt-16 p-8 bg-primary-light rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4 text-primary">Success Rate</h2>
              <p className="text-foreground text-lg">
                <strong>90% success rate</strong> in treating thyroid disorders and infertility cases
              </p>
              <p className="text-muted-foreground mt-2">
                Based on 10+ years of clinical practice with thousands of patients
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Testimonials;
