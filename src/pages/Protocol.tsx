import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Protocol = () => {
  const phases = [
    {
      phase: "1. Detox & Metabolism Reset",
      focus: "Clear thyroid blockers",
      outcome: "Improved energy & metabolism",
      details: "We identify and eliminate factors suppressing your thyroid function — from toxins to nutrient deficiencies. Your body begins to awaken naturally."
    },
    {
      phase: "2. Homeopathy + Nutrient Support",
      focus: "Constitutional remedies + targeted nutrition",
      outcome: "Hormonal rebalancing",
      details: "Personalized homeopathic medicines work at the cellular level while strategic nutrition supports thyroid hormone production and conversion."
    },
    {
      phase: "3. Lifestyle Optimization",
      focus: "Sleep, stress & movement patterns",
      outcome: "Sustained vitality",
      details: "Simple but powerful lifestyle adjustments help regulate your circadian rhythm, reduce cortisol, and support long-term thyroid health."
    },
    {
      phase: "4. Emotional Healing Rituals",
      focus: "Mind-body connection",
      outcome: "Complete wellness",
      details: "Address the emotional roots of hormonal imbalance through guided practices that restore your confidence and inner peace."
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient-bright">The Sanjiva Protocol:</span> Your Path to Natural Healing
                <br />The ThyroCure Method
              </h1>
              <p className="text-xl text-white/90">
                A revolutionary approach to thyroid and hormonal healing — naturally, completely, permanently
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-8">
              {phases.map((item, index) => (
                <Card key={index} className="p-8 hover:shadow-soft transition-all duration-300">
                  <div className="grid md:grid-cols-4 gap-6">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">{item.phase}</h3>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-1">Focus</p>
                      <p className="text-foreground">{item.focus}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground mb-1">Outcome</p>
                      <p className="text-foreground">{item.outcome}</p>
                    </div>
                    <div className="md:col-span-4 md:col-start-2">
                      <p className="text-muted-foreground">{item.details}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="max-w-3xl mx-auto mt-16 p-8 bg-secondary rounded-lg">
              <h2 className="text-2xl font-bold text-center mb-6 text-foreground">
                What Makes ThyroCure Different?
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span>Natural thyroid restoration — no lifelong dependency on synthetic hormones</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span>Addresses root causes — not just TSH numbers but actual thyroid function</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span>Holistic healing — treats the whole woman, not just the thyroid gland</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span>Proven results — women regaining energy, losing weight, and feeling like themselves again</span>
                </li>
              </ul>
            </div>

            <div className="text-center mt-12">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-hero shadow-soft">
                  <Link to="/contact">Start Your Healing Journey</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary-light">
                  <a 
                    href="/protocol-guide.pdf" 
                    download="ThyroCure-Method-Guide.pdf"
                  >
                    Download ThyroCure Guide (PDF)
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

export default Protocol;
