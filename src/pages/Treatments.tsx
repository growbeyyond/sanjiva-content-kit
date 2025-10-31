import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Treatments = () => {
  const treatments = [
    {
      category: "Women's Health",
      conditions: ["PCOD", "Infertility", "Thyroid Disorders", "Menstrual Issues"],
      description: "Specialized care for hormonal balance and reproductive health"
    },
    {
      category: "Pain & Joints",
      conditions: ["Arthritis", "Sciatica", "Spondylitis", "Chronic Pain"],
      description: "Natural relief from joint pain and inflammation"
    },
    {
      category: "Respiratory & Allergies",
      conditions: ["Asthma", "Sinusitis", "Rhinitis", "Seasonal Allergies"],
      description: "Breathe easy with holistic respiratory care"
    },
    {
      category: "Skin & Hair",
      conditions: ["Psoriasis", "Vitiligo", "Acne", "Hair Fall", "Eczema"],
      description: "Gentle healing for lasting skin and hair health"
    },
    {
      category: "Metabolic & Lifestyle",
      conditions: ["Hypertension", "Cholesterol", "Kidney Stones", "Obesity"],
      description: "Restore balance to your metabolic health"
    },
    {
      category: "Digestive Health",
      conditions: ["IBS", "Acidity", "Constipation", "Colitis"],
      description: "Soothe your digestive system naturally"
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
                Treatments & Conditions
              </h1>
              <p className="text-xl text-muted-foreground">
                Explore the conditions we treat with evidence-based homeopathy and the Sanjiva Protocol
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {treatments.map((treatment, index) => (
                <Card key={index} className="p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                  <h3 className="text-xl font-bold text-primary mb-3">{treatment.category}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{treatment.description}</p>
                  <ul className="space-y-2">
                    {treatment.conditions.map((condition, idx) => (
                      <li key={idx} className="text-sm text-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {condition}
                      </li>
                    ))}
                  </ul>
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
      </div>
      <Footer />
    </>
  );
};

export default Treatments;
