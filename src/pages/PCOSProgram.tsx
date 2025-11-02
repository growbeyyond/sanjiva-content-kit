import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Activity, Smile, Sparkles, CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";
import ProgressTracker from "@/components/ProgressTracker";
import pcosInfographic from "@/assets/pcos-infographic.jpg";

const PCOSProgram = () => {
  const approachSteps = [
    { title: "Root-cause testing", description: "Blood work + AI-powered hormonal analysis" },
    { title: "Personalized homeopathic plan", description: "Custom remedies targeting your unique imbalances" },
    { title: "Hormone balancing diet plan", description: "Foods that naturally support ovarian health" },
    { title: "Stress & sleep reset", description: "Mind-body practices for cortisol balance" }
  ];

  const progressMetrics = [
    { icon: <Heart className="w-6 h-6" />, label: "Period Regularity", color: "text-pink-500" },
    { icon: <Activity className="w-6 h-6" />, label: "Energy Levels", color: "text-purple-500" },
    { icon: <Smile className="w-6 h-6" />, label: "Mood Balance", color: "text-indigo-500" },
    { icon: <Sparkles className="w-6 h-6" />, label: "Skin Health", color: "text-rose-500" }
  ];

  return (
    <>
      <SEO 
        title="PCOS Care Program | Natural Hormonal Balance"
        description="Break the PCOS cycle naturally with our 360° approach combining homeopathy, nutrition, and lifestyle medicine for lasting hormonal balance."
        keywords="PCOS treatment, PCOD cure, hormonal balance, natural PCOS care, women's health, homeopathy for PCOS"
      />
      <Navigation />
      <div className="min-h-screen">
        {/* Hero */}
        <section className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                Let's Break the PCOS Cycle
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8">
                Natural, holistic care that addresses the root cause — not just symptoms
              </p>
              <Button asChild size="lg" variant="secondary" className="shadow-glow">
                <Link to="/contact">Book PCOS Assessment</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* What is PCOS */}
        <section className="py-16 bg-gradient-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-8">
                What Is PCOS?
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <Card className="p-8 shadow-card">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    PCOS is not just a period problem. It's a <strong>metabolic, hormonal imbalance</strong> affecting 
                    fertility, skin, weight, and mental health. The root cause lies in insulin resistance, chronic inflammation, 
                    and stress — creating a vicious cycle that traditional medicine often overlooks.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                    Our approach goes beyond symptom management. We work to restore your body's natural hormonal rhythm.
                  </p>
                </Card>
                <div className="relative">
                  <img 
                    src={pcosInfographic} 
                    alt="PCOS hormonal cycle infographic" 
                    className="rounded-lg shadow-card w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 360° Approach */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                Our 360° Approach
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {approachSteps.map((step, index) => (
                  <Card key={index} className="p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button asChild size="lg" className="bg-gradient-hero shadow-soft">
                  <Link to="/contact">Join PCOS Cure Program</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Progress Tracker */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
                Track Your Progress
              </h2>
              <p className="text-center text-muted-foreground mb-12">
                Monitor improvements across key health markers
              </p>
              <ProgressTracker type="pcos" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card className="p-8 shadow-card">
                <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Question</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Can PCOS be cured naturally?
                    </h3>
                    <p className="text-muted-foreground">
                      Yes. With root-cause care and consistent lifestyle rebalancing, most women see dramatic improvements 
                      in period regularity, fertility markers, weight, and energy within 3-6 months. Homeopathy addresses 
                      the hormonal imbalance at its source — not just masking symptoms.
                    </p>
                  </div>
                  <div className="flex items-start gap-2 text-sm text-muted-foreground mt-6 p-4 bg-primary-light rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p>
                      <strong>Real Results:</strong> Our patients report restored menstrual cycles, improved fertility, 
                      weight loss, clearer skin, and renewed confidence.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Break Free from PCOS?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Start your journey to hormonal balance today. Personalized care, lasting results.
              </p>
              <Button asChild size="lg" className="bg-gradient-hero shadow-glow">
                <Link to="/contact">Book PCOS Assessment</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PCOSProgram;
