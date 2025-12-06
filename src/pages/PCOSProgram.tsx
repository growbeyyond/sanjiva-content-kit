import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Activity, Smile, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import ProgressTracker from "@/components/ProgressTracker";
import pcosCycleInfographic from "@/assets/pcos-cycle-infographic.jpg";

const PCOSProgram = () => {
  const approachSteps = [
    { title: "Root-cause testing", description: "Blood work + hormonal analysis" },
    { title: "Personalized homeopathic plan", description: "Custom remedies for your imbalances" },
    { title: "Hormone balancing diet", description: "Foods that support ovarian health" },
    { title: "Stress & sleep reset", description: "Mind-body practices for cortisol balance" }
  ];

  return (
    <>
      <SEO 
        title="PCOS Care Program | Natural Hormonal Balance - Dr. Prasanna"
        description="Break the PCOS cycle naturally with our 360° approach combining homeopathy, nutrition, and lifestyle medicine for lasting hormonal balance."
        keywords="PCOS treatment, PCOD cure, hormonal balance, natural PCOS care, women's health, homeopathy for PCOS"
        canonicalUrl="https://drprasannaboddupally.in/pcos-program"
      />
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-16 md:py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Let's Break the PCOS Cycle
              </h1>
              <p className="text-xl opacity-90 mb-6">
                Natural, holistic care that addresses the root cause — not just symptoms
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact">Book PCOS Assessment <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* What is PCOS */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                What Is <span className="bg-gradient-hero bg-clip-text text-transparent">PCOS</span>?
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-foreground/80 mb-4">
                    PCOS is not just a period problem. It's a <strong>metabolic, hormonal imbalance</strong> affecting 
                    fertility, skin, weight, and mental health.
                  </p>
                  <p className="text-foreground/80 mb-4">
                    The root cause lies in insulin resistance, chronic inflammation, 
                    and stress — creating a vicious cycle that traditional medicine often overlooks.
                  </p>
                  <p className="text-foreground/80">
                    Our approach goes beyond symptom management. We work to restore your body's natural hormonal rhythm.
                  </p>
                </div>
                <div>
                  <img 
                    src={pcosCycleInfographic} 
                    alt="PCOS hormonal cycle infographic" 
                    className="rounded-xl shadow-lg w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 360° Approach */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-8">
                Our 360° Approach
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {approachSteps.map((step, index) => (
                  <Card key={index} className="p-5 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-hero flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                        <p className="text-sm text-foreground/70">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Progress Tracker */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-3">
                Track Your Progress
              </h2>
              <p className="text-center text-foreground/70 mb-8">
                Monitor improvements across key health markers
              </p>
              <ProgressTracker type="pcos" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto p-6">
              <h2 className="text-xl font-bold text-foreground mb-4">Can PCOS be cured naturally?</h2>
              <p className="text-foreground/80 mb-4">
                Yes. With root-cause care and consistent lifestyle rebalancing, most women see dramatic improvements 
                in period regularity, fertility markers, weight, and energy within 3-6 months.
              </p>
              <div className="flex items-start gap-2 p-4 bg-primary/5 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-foreground/80">
                  <strong>Real Results:</strong> Restored menstrual cycles, improved fertility, 
                  weight loss, clearer skin, and renewed confidence.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Break Free from PCOS?
            </h2>
            <p className="text-lg opacity-90 mb-6 max-w-xl mx-auto">
              Start your journey to hormonal balance today. Personalized care, lasting results.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Book PCOS Assessment</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PCOSProgram;
