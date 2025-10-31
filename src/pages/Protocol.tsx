import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Protocol = () => {
  const phases = [
    {
      phase: "1. Diagnosis",
      focus: "Root-cause analysis",
      outcome: "Personalized treatment plan",
      details: "We conduct a comprehensive evaluation of your physical symptoms, emotional state, lifestyle, and medical history to identify the underlying causes."
    },
    {
      phase: "2. Correction",
      focus: "Homeopathic remedies + Lifestyle plan",
      outcome: "Visible improvement",
      details: "Customized homeopathic medicines combined with simple lifestyle modifications begin the healing process without side effects."
    },
    {
      phase: "3. Stabilization",
      focus: "Regular monitoring & adjustments",
      outcome: "Prevent relapse",
      details: "Continuous follow-ups ensure the treatment is working effectively, with adjustments made as needed for optimal results."
    },
    {
      phase: "4. Sustain",
      focus: "Long-term guidance & support",
      outcome: "Holistic well-being",
      details: "Even after symptoms resolve, we provide ongoing support to maintain your health and prevent recurrence naturally."
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
                The Sanjiva Protocol
              </h1>
              <p className="text-xl text-white/90">
                A signature homeopathic system developed by Dr. Prasanna to restore total balance and prevent recurrence
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
                What Makes Sanjiva Protocol Different?
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span>Zero side effects — safe for all ages including children and pregnant women</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span>No food restrictions — live your life normally while healing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span>Prevents recurrence — treats the root cause, not just symptoms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">✓</span>
                  <span>Personalized approach — every treatment plan is unique to you</span>
                </li>
              </ul>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-gradient-hero shadow-soft">
                <Link to="/contact">Start Your Healing Journey</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Protocol;
