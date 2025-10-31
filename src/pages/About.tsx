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
                "Medicine heals the body — compassion heals the person."
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Meet Dr. Prasanna Boddupally — Your partner in holistic healing
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
                    <h2 className="text-2xl font-bold text-primary">About Dr. Prasanna Boddupally</h2>
                    <p className="text-muted-foreground">
                      <strong>Dr. Prasanna Boddupally, BHMS</strong>, is a highly regarded expert in managing thyroid disorders and chronic conditions, 
                      committed to delivering outstanding homeopathic solutions that yield remarkable results. With a deep understanding of the 
                      complexities surrounding thyroid health and hormonal imbalances, Dr. Prasanna employs a personalized approach to treatment.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-primary">Education & Experience</h2>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <Leaf className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span><strong>BHMS</strong> (Bachelor of Homeopathic Medicine & Surgery) – Hyderabad</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Leaf className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span><strong>10+ years</strong> of specialized clinical practice</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Leaf className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span><strong>Expert in:</strong> Thyroid Disorders, PCOD, Infertility, Diabetes, Allergies, Skin Conditions, Arthritis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Leaf className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span><strong>Languages:</strong> English, Telugu, Hindi</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Leaf className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                        <span><strong>Creator of the Sanjiva Protocol</strong> – A systematic healing approach</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-primary">Treatment Philosophy</h2>
                    <p className="text-muted-foreground">
                      What sets Dr. Prasanna apart is her unwavering dedication to holistic healing. Her treatments focus on not just alleviating symptoms 
                      but also addressing the root cause of issues. By utilizing natural remedies that are safe and effective, patients can experience 
                      significant improvements in their health without the worry of harmful side effects.
                    </p>
                    <p className="text-muted-foreground">
                      At her practice, you will find a warm and supportive environment where your health and wellness are the top priority. 
                      Dr. Prasanna believes in empowering patients through education, guiding them on their journey to optimal health.
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
