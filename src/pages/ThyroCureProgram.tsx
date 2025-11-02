import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Flame, Leaf, Moon, Heart, TrendingUp } from "lucide-react";
import SEO from "@/components/SEO";

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
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
                Understanding Thyroid Imbalance
              </h2>
              <Card className="p-8 shadow-card">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Your <strong>thyroid gland is the engine of your metabolism</strong>. When it slows down (hypothyroidism) 
                  or speeds up (hyperthyroidism), your energy fades, and so does your vitality. You may experience:
                </p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
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
                        <p className="text-muted-foreground">{step.description}</p>
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
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Track Your Progress
              </h2>
              <p className="text-muted-foreground mb-8">
                Log T3, T4, TSH levels and watch your improvement over time
              </p>
              <Card className="p-8 shadow-card">
                <div className="flex items-center justify-center gap-8 flex-wrap">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <TrendingUp className="w-8 h-8 text-primary" />
                    </div>
                    <p className="font-bold text-2xl text-foreground">T3 Levels</p>
                    <p className="text-sm text-muted-foreground">Optimized</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <TrendingUp className="w-8 h-8 text-primary" />
                    </div>
                    <p className="font-bold text-2xl text-foreground">T4 Levels</p>
                    <p className="text-sm text-muted-foreground">Balanced</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <TrendingUp className="w-8 h-8 text-primary" />
                    </div>
                    <p className="font-bold text-2xl text-foreground">TSH</p>
                    <p className="text-sm text-muted-foreground">Normalized</p>
                  </div>
                </div>
                <p className="mt-6 text-sm text-muted-foreground">
                  Personalized dashboards available to track your journey
                </p>
              </Card>
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
              <Button asChild size="lg" className="bg-gradient-hero shadow-glow">
                <Link to="/contact">Book Your ThyroCure Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ThyroCureProgram;
