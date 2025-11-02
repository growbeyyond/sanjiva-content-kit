import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, Award, Users, Globe, Clock, Leaf } from "lucide-react";
import doctorImage from "@/assets/doctor-prasanna.jpg";

const About = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen">
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Empowering Women Through Hormonal Healing
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                "Science heals the body. Empathy heals the soul."
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
                <div className="space-y-6">
                  <img src={doctorImage} alt="Dr. Prasanna Boddupally" className="rounded-2xl shadow-card w-full" />
                  
                  <div className="bg-white rounded-xl shadow-card p-6 space-y-4">
                    <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Consultation Timings
                    </h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p className="flex justify-between">
                        <span className="font-semibold">Monday - Saturday (Morning)</span>
                        <span>10:00 AM - 1:00 PM</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="font-semibold">Monday - Saturday (Evening)</span>
                        <span>5:00 PM - 8:30 PM</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="font-semibold">Sunday (Morning)</span>
                        <span>10:00 AM - 1:00 PM</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-primary">Her Journey</h2>
                    <p className="text-muted-foreground">
                      Dr. Prasanna's story began with a simple vision — to treat women not just for their symptoms, but for their emotions, cycles, and confidence.
                    </p>
                    <p className="text-muted-foreground italic">
                      "Homeopathy × Modern Hormone Science — I help women rebuild confidence through balanced health."
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-primary">Experience & Expertise</h2>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Leaf className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span><strong>10+ years</strong> in women's homeopathy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Leaf className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span><strong>Specialist</strong> in PCOS & thyroid care</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Leaf className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span><strong>International certifications</strong> in functional medicine</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Leaf className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span><strong>Founder</strong> of ThyroCure Method</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Leaf className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span><strong>Certified</strong> Women's Hormonal Health Specialist</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-primary">The ThyroCure Philosophy</h2>
                    <p className="text-muted-foreground italic text-lg">
                      "Your body already knows how to heal. I just help you listen."
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>Holistic approach to hormonal balance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>Root-cause based diagnosis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span>Personalized care plans for every woman</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-primary">Media & Milestones</h2>
                    <p className="text-muted-foreground">
                      Featured in <strong>HealthLine India</strong> | Panelist on <strong>Women's Hormone Summit 2024</strong>
                    </p>
                  </div>
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
                  <Link to="/contact">Schedule a Session with Dr. Prasanna</Link>
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
