import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TopBanner from "@/components/TopBanner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, Award, Users, Globe, Clock, Leaf, CheckCircle2, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import doctorImage from "@/assets/doctor-prasanna.jpg";

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Prasanna Boddupally",
    "image": doctorImage,
    "description": "Expert homeopathy physician in Hyderabad specializing in women's hormonal health, PCOS, thyroid disorders, and natural healing with 10+ years experience.",
    "medicalSpecialty": ["Homeopathy", "Women's Health", "Hormonal Disorders", "PCOS Treatment", "Thyroid Treatment"],
    "knowsLanguage": ["English", "Telugu", "Hindi"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    },
    "telephone": "+916304633491",
    "email": "pcosthyrocure@gmail.com"
  };

  const expertise = [
    { label: "10+ Years Experience", description: "In women's homeopathy" },
    { label: "PCOS & Thyroid Specialist", description: "Focused expertise" },
    { label: "5000+ Patients Treated", description: "Across India & abroad" },
    { label: "ThyroCure Founder", description: "Proprietary healing method" }
  ];

  const values = [
    { icon: Heart, label: "Integrity" },
    { icon: Users, label: "Empathy" },
    { icon: Globe, label: "Transparency" },
    { icon: Award, label: "Excellence" }
  ];

  return (
    <>
      <TopBanner />
      <SEO
        title="About Dr. Prasanna Boddupally | Homeopathy Doctor Hyderabad - PCOS & Thyroid Specialist"
        description="Dr. Prasanna Boddupally is a leading homeopathy physician in Hyderabad with 10+ years experience treating PCOS, thyroid disorders, and hormonal imbalances. Book consultation today."
        keywords="Dr Prasanna Boddupally, homeopathy doctor Hyderabad, PCOS specialist, thyroid doctor, women's health expert, homeopathic physician Telangana"
        canonicalUrl="https://drprasannaboddupally.in/about"
        structuredData={structuredData}
      />
      <Navigation />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-16 md:py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Meet <span className="bg-gradient-hero bg-clip-text text-transparent">Dr. Prasanna Boddupally</span>
              </h1>
              <p className="text-lg text-foreground/80">
                Empowering women through natural hormonal healing
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-10 items-start">
                {/* Image & Timings */}
                <div className="space-y-6">
                  <img 
                    src={doctorImage} 
                    alt="Dr. Prasanna Boddupally - Homeopathy Physician in Hyderabad" 
                    className="rounded-2xl shadow-lg w-full" 
                  />
                  
                  <Card className="p-5">
                    <h2 className="text-lg font-bold text-foreground flex items-center gap-2 mb-4">
                      <Clock className="w-5 h-5 text-primary" />
                      Consultation Timings
                    </h2>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-foreground/70">Mon - Sat (Morning)</span>
                        <span className="font-medium text-foreground">10:00 AM - 1:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/70">Mon - Sat (Evening)</span>
                        <span className="font-medium text-foreground">5:00 PM - 8:30 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-foreground/70">Sunday</span>
                        <span className="font-medium text-foreground">10:00 AM - 1:00 PM</span>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Bio */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-3">Her Journey</h2>
                    <p className="text-foreground/80 mb-4">
                      Dr. Prasanna's story began with a simple vision — to treat women not just for their symptoms, but for their emotions, cycles, and confidence.
                    </p>
                    <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80">
                      "Homeopathy × Modern Hormone Science — I help women rebuild confidence through balanced health."
                    </blockquote>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-foreground mb-3">Experience & Expertise</h2>
                    <div className="grid grid-cols-2 gap-3">
                      {expertise.map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Leaf className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-foreground text-sm">{item.label}</p>
                            <p className="text-xs text-foreground/60">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-bold text-accent mb-3">The ThyroCure Philosophy</h2>
                    <blockquote className="text-lg italic text-foreground/80 mb-4">
                      "Your body already knows how to heal. I just help you listen."
                    </blockquote>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        Holistic approach to hormonal balance
                      </li>
                      <li className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        Root-cause based diagnosis
                      </li>
                      <li className="flex items-center gap-2 text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        Personalized care for every woman
                      </li>
                    </ul>
                  </div>

                  <Button asChild size="lg" className="bg-gradient-hero w-full sm:w-auto">
                    <Link to="/contact">Schedule a Session <ArrowRight className="ml-2 w-4 h-4" /></Link>
                  </Button>
                </div>
              </div>

              {/* Values */}
              <div className="mt-12 pt-12 border-t border-border">
                <h2 className="text-2xl font-bold text-center text-foreground mb-8">Core Values</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {values.map((value, index) => (
                    <div key={index} className="text-center p-5 bg-secondary rounded-xl">
                      <value.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="font-semibold text-foreground">{value.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
