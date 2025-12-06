import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Heart, Sparkles, Leaf, Scale, Brain } from "lucide-react";
import SEO from "@/components/SEO";
import treatmentsHero from "@/assets/treatments-hero.jpg";

const Treatments = () => {
  const treatments = [
    {
      category: "Thyroid Wellness",
      conditions: ["Hypothyroidism", "Hyperthyroidism", "Thyroid Nodules", "Hashimoto's Disease"],
      description: "Restore your metabolic engine naturally with ThyroCure",
      icon: Shield,
      link: "/protocol",
      color: "text-accent"
    },
    {
      category: "PCOS & Reproductive Health",
      conditions: ["PCOS/PCOD", "Irregular Periods", "Fertility Support", "Ovarian Cysts"],
      description: "Break the PCOS cycle with holistic hormonal rebalancing",
      icon: Heart,
      link: "/pcos-program",
      color: "text-primary"
    },
    {
      category: "Weight & Metabolism",
      conditions: ["Stubborn Weight Gain", "Insulin Resistance", "Metabolic Syndrome"],
      description: "Balance hormones to unlock natural weight management",
      icon: Scale,
      link: "/contact",
      color: "text-accent"
    },
    {
      category: "Skin & Hair Health",
      conditions: ["Acne & Hormonal Breakouts", "Hair Loss", "Hirsutism", "PCOS Skin Issues"],
      description: "Heal your skin from within through hormonal harmony",
      icon: Sparkles,
      link: "/contact",
      color: "text-primary"
    },
    {
      category: "Energy & Vitality",
      conditions: ["Chronic Fatigue", "Brain Fog", "Low Energy", "Sleep Issues"],
      description: "Reclaim your vitality through hormonal optimization",
      icon: Leaf,
      link: "/contact",
      color: "text-accent"
    },
    {
      category: "Mental Wellness",
      conditions: ["Anxiety", "Depression", "Stress Management", "Mood Swings"],
      description: "Nurture your mind-body connection for complete healing",
      icon: Brain,
      link: "/contact",
      color: "text-primary"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Homeopathy Treatments in Hyderabad",
    "description": "Comprehensive homeopathic treatments for thyroid disorders, PCOS, hormonal imbalances, skin conditions, and chronic diseases by Dr. Prasanna Boddupally.",
    "mainEntity": treatments.map(t => ({
      "@type": "MedicalCondition",
      "name": t.category,
      "possibleTreatment": {
        "@type": "MedicalTherapy",
        "name": "Homeopathic Treatment"
      }
    }))
  };

  return (
    <>
      <SEO 
        title="Homeopathy Treatments in Hyderabad | Thyroid, PCOS, Hormonal Care - Dr. Prasanna"
        description="Expert homeopathic treatment for thyroid disorders, PCOS, weight management, skin & hair health, and chronic conditions in Hyderabad. Natural healing with lasting results."
        keywords="homeopathy treatments Hyderabad, thyroid treatment, PCOS treatment, hormonal imbalance cure, weight loss homeopathy, skin treatment, chronic fatigue treatment"
        canonicalUrl="https://drprasannaboddupally.in/treatments"
        structuredData={structuredData}
      />
      <Navigation />
      <main className="min-h-screen">
        {/* Hero with Image */}
        <section className="relative py-16 md:py-20 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${treatmentsHero})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/70" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Natural Healing for{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">Women's Health</span>
              </h1>
              <p className="text-lg text-foreground/80 mb-6">
                Comprehensive hormonal care for thyroid, PCOS, and complete wellness through homeopathy
              </p>
              <Button asChild size="lg" className="bg-gradient-hero">
                <Link to="/contact">Book Consultation <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Treatments Grid */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-foreground mb-3">Conditions We Treat</h2>
              <p className="text-foreground/70">Specialized care for a wide range of health concerns</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {treatments.map((treatment, index) => (
                <Card key={index} className="p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                  <treatment.icon className={`w-10 h-10 mb-3 ${treatment.color}`} />
                  <h3 className="text-lg font-bold text-foreground mb-2">{treatment.category}</h3>
                  <p className="text-sm text-foreground/70 mb-3">{treatment.description}</p>
                  <ul className="space-y-1.5 mb-4">
                    {treatment.conditions.map((condition, idx) => (
                      <li key={idx} className="text-sm text-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {condition}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={treatment.link}
                    className="text-primary font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Not Sure Which Treatment Is Right for You?
            </h2>
            <p className="text-lg opacity-90 mb-6 max-w-xl mx-auto">
              Book a free consultation and Dr. Prasanna will guide you to the best treatment plan.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Treatments;
