import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const Treatments = () => {
  const treatments = [
    {
      category: "Thyroid Wellness",
      conditions: ["Hypothyroidism", "Hyperthyroidism", "Thyroid Nodules", "Hashimoto's Disease"],
      description: "Restore your metabolic engine naturally with ThyroCure",
      icon: "🦋",
      link: "/protocol"
    },
    {
      category: "PCOS & Reproductive Health",
      conditions: ["PCOS/PCOD", "Irregular Periods", "Fertility Support", "Menstrual Pain", "Ovarian Cysts"],
      description: "Break the PCOS cycle with holistic hormonal rebalancing",
      icon: "🌸",
      link: "/pcos-program"
    },
    {
      category: "Weight & Metabolism",
      conditions: ["Stubborn Weight Gain", "Insulin Resistance", "Metabolic Syndrome", "Obesity"],
      description: "Balance hormones to unlock natural weight management",
      icon: "⚖️",
      link: "/contact"
    },
    {
      category: "Skin & Hair Health",
      conditions: ["Acne & Hormonal Breakouts", "Hair Loss", "Hirsutism", "Melasma", "PCOS Skin Issues"],
      description: "Heal your skin from within through hormonal harmony",
      icon: "✨",
      link: "/contact"
    },
    {
      category: "Energy & Vitality",
      conditions: ["Chronic Fatigue", "Brain Fog", "Low Energy", "Mood Swings", "Sleep Issues"],
      description: "Reclaim your vitality through hormonal optimization",
      icon: "💪",
      link: "/contact"
    },
    {
      category: "Mental & Emotional Wellness",
      conditions: ["Anxiety", "Depression", "Stress Management", "Emotional Eating", "Low Self-Esteem"],
      description: "Nurture your mind-body connection for complete healing",
      icon: "🧘‍♀️",
      link: "/contact"
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
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Natural Healing for <span className="text-gradient-bright">Chronic Conditions</span>
                <br />Women's Health Solutions
              </h1>
              <p className="text-xl text-foreground/90">
                Comprehensive hormonal care for thyroid health, PCOS, and complete wellness
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {treatments.map((treatment, index) => (
                <Card key={index} className="p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                  <div className="text-4xl mb-3">{treatment.icon}</div>
                  <h2 className="text-xl font-bold text-primary mb-3">{treatment.category}</h2>
                  <p className="text-sm text-foreground/80 mb-4">{treatment.description}</p>
                  <ul className="space-y-2 mb-4">
                    {treatment.conditions.map((condition, idx) => (
                      <li key={idx} className="text-sm text-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">🌿</span>
                        {condition}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to={treatment.link}
                    className="text-primary font-semibold text-sm hover:underline"
                  >
                    Learn more →
                  </Link>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-gradient-hero shadow-soft">
                <Link to="/contact">Book Consultation for Your Condition</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Treatments;