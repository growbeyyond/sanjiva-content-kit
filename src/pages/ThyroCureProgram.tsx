import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TopBanner from "@/components/TopBanner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Flame, Leaf, Moon, Heart, TrendingUp } from "lucide-react";
import SEO from "@/components/SEO";
import ProgressTracker from "@/components/ProgressTracker";

const ThyroCureProgram = () => {
  const methodSteps = [
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Detox & Metabolism Reset",
      description: "Clear toxins that slow down thyroid function and restart your metabolic engine"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Homeopathy + Nutrient Support",
      description: "Custom remedies plus essential vitamins (iodine, selenium, zinc) for optimal thyroid health"
    },
    {
      icon: <Moon className="w-8 h-8" />,
      title: "Lifestyle Optimization",
      description: "Sleep hygiene, stress management, and movement patterns that support hormone balance"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Emotional Healing Rituals",
      description: "Address the mind-body connection — unresolved stress affects thyroid deeply"
    }
  ];

  return (
    <>
      <TopBanner />
      <SEO
        title="ThyroCure Program | Natural Thyroid Healing"
        description="Heal your thyroid naturally and completely with our comprehensive 4-step method combining homeopathy, nutrition, lifestyle optimization, and emotional healing."
        keywords="thyroid treatment, hypothyroid cure, hyperthyroid natural treatment, thyroid homeopathy, hormonal balance"
      />
      <Navigation />
      <div className="min-h-screen">
        {/* Hero */}
        <section className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Heal Your Thyroid — Naturally, Completely
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8">
                Restore metabolism, energy, and vitality without lifelong medication dependency
              </p>
              <Button asChild size="lg" variant="secondary" className="shadow-glow">
                <Link to="/contact">Book Your ThyroCure Consultation</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Understanding Thyroid */}
        <section className="py-16 bg-gradient-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                <span className="text-gradient-bright">ThyroCure Program:</span> Natural Thyroid Balance
                <br />Understanding Thyroid Imbalance
              </h2>
              <Card className="p-8 shadow-card">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Your <strong>thyroid gland is the engine of your metabolism</strong>. When it slows down (hypothyroidism) 
                  or speeds up (hyperthyroidism), your energy fades, and so does your vitality. You may experience:
                </p>
                <ul className="mt-4 space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Persistent fatigue and brain fog</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Unexplained weight gain or loss</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Hair loss and dry skin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Mood swings and depression</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Irregular periods and fertility issues</span>
                  </li>
                </ul>
                <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                  Conventional treatment often means <strong>lifelong synthetic hormones</strong>. ThyroCure offers a different path — 
                  one that supports your body's natural healing capacity.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* ThyroCure Method */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
                The ThyroCure Method
              </h2>
              <p className="text-center text-muted-foreground mb-12 text-lg">
                A comprehensive 4-step approach to thyroid restoration
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {methodSteps.map((step, index) => (
                  <Card key={index} className="p-8 hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground flex-shrink-0">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                        <p className="text-foreground/80">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Progress Tracking */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
                Track Your Progress
              </h2>
              <p className="text-muted-foreground mb-8 text-center">
                Log T3, T4, TSH levels and watch your improvement over time
              </p>
              <ProgressTracker type="thyroid" />
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="p-8 shadow-card bg-primary-light border-primary">
                <p className="text-xl text-foreground italic mb-4">
                  "No more neck swelling or fatigue — ThyroCure works."
                </p>
                <p className="text-muted-foreground font-semibold">— Lakshmi K., Hypothyroid Patient</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Treatment Timeline */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-8">
                What to Expect: Your Healing Journey
              </h2>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { week: "Week 1-4", title: "Assessment", desc: "Complete evaluation, baseline tests, initial remedies" },
                  { week: "Month 2-3", title: "Stabilization", desc: "Energy improvement, sleep quality, mood balance" },
                  { week: "Month 4-6", title: "Normalization", desc: "TSH levels improving, weight stabilization" },
                  { week: "Month 6+", title: "Maintenance", desc: "Sustained thyroid health, reduced dependency" }
                ].map((phase, idx) => (
                  <Card key={idx} className="p-4 text-center hover:shadow-lg transition-all">
                    <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center text-white font-bold mx-auto mb-3">
                      {idx + 1}
                    </div>
                    <p className="text-xs font-semibold text-primary mb-1">{phase.week}</p>
                    <h3 className="font-bold text-foreground mb-2">{phase.title}</h3>
                    <p className="text-xs text-foreground/70">{phase.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Before Your Visit */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-foreground mb-6">
                Prepare for Your Consultation
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-5">
                  <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" /> Tests to Bring
                  </h3>
                  <ul className="text-sm text-foreground/80 space-y-2">
                    <li>• Complete Thyroid Panel (TSH, T3, T4, Free T3, Free T4)</li>
                    <li>• Thyroid antibodies (TPO, TG antibodies)</li>
                    <li>• Vitamin D, B12, Iron levels</li>
                    <li>• Ultrasound thyroid (if available)</li>
                    <li>• Current medications list</li>
                  </ul>
                  <p className="text-xs text-foreground/50 mt-3">Don't have these? We'll guide you on what's needed.</p>
                </Card>
                <Card className="p-5">
                  <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" /> What We'll Cover
                  </h3>
                  <ul className="text-sm text-foreground/80 space-y-2">
                    <li>• Detailed symptom history (30-45 mins)</li>
                    <li>• Root cause analysis</li>
                    <li>• Personalized treatment protocol</li>
                    <li>• Dietary recommendations</li>
                    <li>• Lifestyle modifications</li>
                    <li>• Follow-up schedule</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Who Is This For */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto p-6">
              <h2 className="text-xl font-bold text-foreground mb-4 text-center">Is ThyroCure Right for You?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-primary mb-2">✓ Perfect For</h3>
                  <ul className="text-sm text-foreground/80 space-y-1">
                    <li>• Hypothyroidism (underactive thyroid)</li>
                    <li>• Hyperthyroidism (overactive thyroid)</li>
                    <li>• Hashimoto's thyroiditis</li>
                    <li>• Thyroid nodules (non-cancerous)</li>
                    <li>• Seeking to reduce thyroid medication</li>
                    <li>• Post-pregnancy thyroid issues</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground/60 mb-2">May Need Specialist Care</h3>
                  <ul className="text-sm text-foreground/60 space-y-1">
                    <li>• Thyroid cancer or suspected malignancy</li>
                    <li>• Thyroid storm (medical emergency)</li>
                    <li>• Large goiters requiring surgery</li>
                    <li>• Severe eye complications (Graves')</li>
                  </ul>
                  <p className="text-xs text-foreground/50 mt-2">We'll help you determine the best path during consultation.</p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Start Your Thyroid Healing Journey
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Reclaim your energy, metabolism, and confidence — naturally.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" className="bg-gradient-hero shadow-glow">
                  <Link to="/contact">Book ThyroCure Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="https://wa.me/918179942297?text=Hi%20Doctor,%20I%20have%20questions%20about%20thyroid%20treatment" target="_blank" rel="noopener noreferrer">
                    Ask a Question
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ThyroCureProgram;
