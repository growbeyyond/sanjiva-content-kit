import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  CheckCircle2, ArrowRight, Star, Phone, MessageCircle, 
  Clock, Users, Shield, Award
} from "lucide-react";
import SEO from "@/components/SEO";
import doctorImage from "@/assets/doctor-prasanna.jpg";

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Prasanna Boddupally",
    "description": "Expert homeopathy physician specializing in women's hormonal health, PCOS, thyroid disorders, and natural healing.",
    "medicalSpecialty": ["Homeopathy", "Women's Health", "Hormonal Disorders"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "5000"
    }
  };

  const treatments = [
    { name: "Thyroid Disorders", description: "Hypothyroidism, Hyperthyroidism, Thyroid Nodules", link: "/protocol", color: "border-accent" },
    { name: "PCOS / PCOD", description: "Irregular periods, Weight gain, Hormonal acne", link: "/pcos-program", color: "border-primary" },
    { name: "Infertility", description: "Natural conception support", link: "/treatments", color: "border-primary" },
    { name: "Weight Management", description: "Hormonal weight issues", link: "/treatments", color: "border-accent" },
  ];

  const testimonials = [
    { text: "My thyroid is now normal after 6 months. No more fatigue!", author: "Lakshmi R.", condition: "Thyroid" },
    { text: "Periods are regular now. Lost 12kg naturally!", author: "Divya M.", condition: "PCOS" },
    { text: "Conceived naturally after 3 years of trying.", author: "Anjali K.", condition: "Infertility" },
  ];

  return (
    <div className="min-h-screen">
      <SEO 
        title="Dr. Prasanna Boddupally | Thyroid & PCOS Homeopathy - Hyderabad"
        description="Expert homeopathic treatment for thyroid, PCOS, and hormonal issues in Hyderabad. Natural healing with 10+ years experience. Book free consultation today."
        keywords="thyroid treatment Hyderabad, PCOS treatment, homeopathy doctor, Dr Prasanna Boddupally, hormonal imbalance"
        canonicalUrl="https://drprasannaboddupally.in"
        structuredData={structuredData}
      />

      {/* Hero - Simple & Clear */}
      <section className="py-16 md:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Natural Treatment for{" "}
              <span className="text-accent">Thyroid</span> &{" "}
              <span className="text-primary">PCOS</span>
            </h1>
            <p className="text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Get lasting relief through homeopathy. No side effects. 
              Personalized care by Dr. Prasanna Boddupally.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-hero text-lg px-8">
                <Link to="/book">
                  Book Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8">
                <a href="https://wa.me/918179942297" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5" /> WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat - Simple Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">
            Conditions We Treat
          </h2>
          <p className="text-center text-foreground/70 mb-10 max-w-xl mx-auto">
            Specialized homeopathic care for women's hormonal health
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {treatments.map((item, idx) => (
              <Link to={item.link} key={idx}>
                <Card className={`p-6 h-full hover:shadow-lg transition-shadow border-l-4 ${item.color}`}>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.name}</h3>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/treatments">View All Treatments</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Doctor - Simple */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img 
                src={doctorImage} 
                alt="Dr. Prasanna Boddupally - Homeopathy Doctor in Hyderabad" 
                className="rounded-2xl shadow-lg w-full max-w-sm mx-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Meet Dr. Prasanna Boddupally
              </h2>
              <p className="text-foreground/80 mb-6">
                With over 10 years of experience in treating thyroid disorders and PCOS, 
                Dr. Prasanna has helped 5000+ women achieve hormonal balance naturally.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  10+ Years Experience
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  5000+ Patients Treated
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  Online & In-Clinic Consultations
                </li>
              </ul>
              <Button asChild variant="outline">
                <Link to="/about">Learn More About Dr. Prasanna</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Simple Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-10">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground">100%</h3>
              <p className="text-sm text-foreground/70">Natural & Safe</p>
            </div>
            <div className="text-center p-6">
              <Users className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground">5000+</h3>
              <p className="text-sm text-foreground/70">Happy Patients</p>
            </div>
            <div className="text-center p-6">
              <Award className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground">10+</h3>
              <p className="text-sm text-foreground/70">Years Experience</p>
            </div>
            <div className="text-center p-6">
              <Star className="w-10 h-10 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-foreground">4.9/5</h3>
              <p className="text-sm text-foreground/70">Patient Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Simple */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-10">
            What Our Patients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((item, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{item.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-foreground">{item.author}</p>
                  <p className="text-sm text-primary">{item.condition}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/testimonials">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA - Book Appointment */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-xl mx-auto">
            Book a consultation with Dr. Prasanna today. Online & in-person options available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link to="/book">Book Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
              <a href="tel:+918179942297">
                <Phone className="mr-2 w-5 h-5" /> Call: +91 81799 42297
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Clinic Info - Simple */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-xl font-bold text-foreground mb-4">Clinic Hours</h3>
            <div className="flex flex-wrap justify-center gap-6 text-foreground/80">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Mon-Sat: 10 AM - 1 PM, 5 PM - 8:30 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Sunday: 10 AM - 1 PM</span>
              </div>
            </div>
            <p className="text-sm text-foreground/60 mt-4">
              Hyderabad, Telangana | Online consultations available worldwide
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;