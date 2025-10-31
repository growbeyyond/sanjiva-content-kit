import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Award, Users, Globe } from "lucide-react";

const About = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                "Medicine heals the body — compassion heals the person."
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Meet Dr. Prasanna Boddupally — Your partner in holistic healing
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary">Education & Experience</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>BHMS</strong> – Hyderabad</li>
                    <li><strong>10+ years</strong> of clinical practice</li>
                    <li><strong>Specialization:</strong> Thyroid, PCOD, Infertility, Allergies, Arthritis</li>
                    <li><strong>Languages:</strong> English, Telugu, Hindi</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-primary">Philosophy</h2>
                  <p className="text-muted-foreground">
                    "Every treatment plan is personal. I listen, understand, and heal at your pace. 
                    My approach combines scientific homeopathy with deep compassion for lasting results."
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: <Heart className="w-8 h-8" />, label: "Integrity" },
                  { icon: <Users className="w-8 h-8" />, label: "Empathy" },
                  { icon: <Globe className="w-8 h-8" />, label: "Transparency" },
                  { icon: <Award className="w-8 h-8" />, label: "Scientific" }
                ].map((value, index) => (
                  <div key={index} className="text-center p-6 bg-secondary rounded-lg">
                    <div className="flex justify-center text-primary mb-2">{value.icon}</div>
                    <p className="font-semibold text-foreground">{value.label}</p>
                  </div>
                ))}
              </div>

              <div className="text-center pt-8">
                <Button asChild size="lg" className="bg-gradient-hero shadow-soft">
                  <Link to="/contact">Book Your Consultation</Link>
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

export default About;
