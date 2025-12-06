import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import thyroidWellness from "@/assets/thyroid-wellness.jpg";

const Protocol = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Detox & Metabolism Reset",
      focus: "Clear thyroid blockers",
      outcome: "Improved energy & metabolism",
      details: "We identify and eliminate factors suppressing your thyroid function — from toxins to nutrient deficiencies. Your body begins to awaken naturally."
    },
    {
      phase: "Phase 2",
      title: "Homeopathy + Nutrient Support",
      focus: "Constitutional remedies + targeted nutrition",
      outcome: "Hormonal rebalancing",
      details: "Personalized homeopathic medicines work at the cellular level while strategic nutrition supports thyroid hormone production and conversion."
    },
    {
      phase: "Phase 3",
      title: "Lifestyle Optimization",
      focus: "Sleep, stress & movement patterns",
      outcome: "Sustained vitality",
      details: "Simple but powerful lifestyle adjustments help regulate your circadian rhythm, reduce cortisol, and support long-term thyroid health."
    },
    {
      phase: "Phase 4",
      title: "Emotional Healing Rituals",
      focus: "Mind-body connection",
      outcome: "Complete wellness",
      details: "Address the emotional roots of hormonal imbalance through guided practices that restore your confidence and inner peace."
    }
  ];

  const benefits = [
    "Natural thyroid restoration — no lifelong dependency on synthetic hormones",
    "Addresses root causes — not just TSH numbers but actual thyroid function",
    "Holistic healing — treats the whole woman, not just the thyroid gland",
    "Proven results — women regaining energy, losing weight, and feeling like themselves again"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "ThyroCure Method - Thyroid Treatment in Hyderabad",
    "description": "Revolutionary homeopathic approach to thyroid treatment. Natural healing for hypothyroidism, hyperthyroidism, and thyroid nodules.",
    "mainEntity": {
      "@type": "MedicalTherapy",
      "name": "ThyroCure Method",
      "description": "4-phase holistic thyroid healing program combining homeopathy, nutrition, lifestyle optimization, and emotional healing."
    }
  };

  return (
    <>
      <SEO 
        title="Thyroid Treatment in Hyderabad | ThyroCure Method - Dr. Prasanna Boddupally"
        description="Natural thyroid treatment using the ThyroCure Method. Holistic cure for hypothyroidism, hyperthyroidism & thyroid nodules without lifelong medication dependency. Book consultation."
        keywords="thyroid treatment Hyderabad, hypothyroidism cure, hyperthyroidism treatment, thyroid homeopathy, ThyroCure, natural thyroid healing, Dr Prasanna thyroid"
        canonicalUrl="https://drprasannaboddupally.in/thyroid-treatment-hyderabad"
        structuredData={structuredData}
      />
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Section with Image */}
        <section className="relative py-16 md:py-20 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${thyroidWellness})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                Thyroid Wellness Program
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                The <span className="bg-gradient-hero bg-clip-text text-transparent">ThyroCure</span> Method
              </h1>
              <p className="text-lg text-foreground/80 mb-6">
                A revolutionary 4-phase approach to thyroid and hormonal healing — naturally, completely, permanently.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-gradient-hero">
                  <Link to="/contact">Start Your Healing Journey</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="/protocol-guide.pdf" download="ThyroCure-Method-Guide.pdf">
                    Download Guide (PDF)
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Phases */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                The 4-Phase Protocol
              </h2>
              <p className="text-foreground/70 max-w-xl mx-auto">
                Your personalized path to thyroid wellness
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-4">
              {phases.map((item, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                  <div className="grid md:grid-cols-12 gap-4 items-start">
                    <div className="md:col-span-3">
                      <span className="text-sm font-medium text-primary">{item.phase}</span>
                      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                    </div>
                    <div className="md:col-span-9">
                      <div className="grid sm:grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wide">Focus</p>
                          <p className="text-foreground">{item.focus}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wide">Outcome</p>
                          <p className="text-foreground">{item.outcome}</p>
                        </div>
                      </div>
                      <p className="text-sm text-foreground/70">{item.details}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
                What Makes ThyroCure Different?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 bg-background p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Heal Your Thyroid Naturally?
            </h2>
            <p className="text-lg opacity-90 mb-6 max-w-xl mx-auto">
              Book a consultation with Dr. Prasanna and start your ThyroCure journey today.
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

export default Protocol;
