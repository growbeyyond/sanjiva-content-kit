import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  CheckCircle2, ArrowRight, Star, Phone, MessageCircle, 
  Clock, Users, Shield, Award, Heart, Leaf, Sparkles,
  MapPin, Calendar
} from "lucide-react";
import SEO from "@/components/SEO";
import doctorImage from "@/assets/doctor-prasanna.jpg";
import heroBackground from "@/assets/hero-background.jpg";

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
    { 
      name: "Thyroid Disorders", 
      description: "Hypothyroidism, Hyperthyroidism, Thyroid Nodules, Hashimoto's", 
      link: "/protocol", 
      icon: Shield,
      gradient: "from-accent/20 to-accent/5"
    },
    { 
      name: "PCOS / PCOD", 
      description: "Irregular periods, Weight gain, Hormonal acne, Hair loss", 
      link: "/pcos-program", 
      icon: Heart,
      gradient: "from-primary/20 to-primary/5"
    },
    { 
      name: "Infertility", 
      description: "Natural conception support, Hormonal balance", 
      link: "/treatments", 
      icon: Sparkles,
      gradient: "from-accent/20 to-accent/5"
    },
    { 
      name: "Weight Management", 
      description: "Hormonal weight issues, Metabolism support", 
      link: "/treatments", 
      icon: Leaf,
      gradient: "from-primary/20 to-primary/5"
    },
  ];

  const testimonials = [
    { 
      text: "My thyroid levels are now completely normal after 6 months of treatment. No more fatigue, no more mood swings. Thank you Dr. Prasanna!", 
      author: "Lakshmi R.", 
      location: "Hyderabad",
      condition: "Thyroid" 
    },
    { 
      text: "After years of struggling with PCOS, my periods are finally regular. I've lost 12kg naturally without any crash diets!", 
      author: "Divya M.", 
      location: "Bangalore",
      condition: "PCOS" 
    },
    { 
      text: "We tried for 3 years to conceive. With Dr. Prasanna's treatment, we're now blessed with a baby girl. Forever grateful!", 
      author: "Anjali K.", 
      location: "Chennai",
      condition: "Infertility" 
    },
  ];

  const howItWorks = [
    { step: "1", title: "Book Consultation", description: "Schedule a free consultation online or visit our clinic" },
    { step: "2", title: "Detailed Assessment", description: "We analyze your symptoms, history & lab reports" },
    { step: "3", title: "Personalized Plan", description: "Get a customized homeopathic treatment plan" },
    { step: "4", title: "Regular Follow-ups", description: "Track your progress with regular check-ins" },
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

      {/* Hero Section with Background Image */}
      <section 
        className="relative min-h-[600px] md:min-h-[700px] flex items-center"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Natural Healing • No Side Effects
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Find Your{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Hormonal Balance
              </span>{" "}
              Naturally
            </h1>
            
            <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
              Specialized homeopathic treatment for <strong>Thyroid</strong>, <strong>PCOS</strong>, 
              and hormonal disorders. Trusted by 5000+ women across India.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg" className="bg-gradient-hero text-lg px-8 h-14">
                <Link to="/book">
                  Book Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 h-14 bg-background/50 backdrop-blur-sm">
                <a href="https://wa.me/918179942297" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 w-5 h-5" /> WhatsApp Us
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-foreground/70">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>5000+ Patients Treated</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span>Online Consultations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-gradient-hero py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white text-center">
            <div>
              <p className="text-3xl font-bold">5000+</p>
              <p className="text-sm opacity-90">Happy Patients</p>
            </div>
            <div>
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm opacity-90">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold">4.9/5</p>
              <p className="text-sm opacity-90">Patient Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm opacity-90">Natural Treatment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Conditions We Treat
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Specialized homeopathic care for women's hormonal health problems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {treatments.map((item, idx) => (
              <Link to={item.link} key={idx} className="group">
                <Card className={`p-6 h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br ${item.gradient} group-hover:-translate-y-1`}>
                  <item.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.name}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                  <div className="mt-4 text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild size="lg" variant="outline">
              <Link to="/treatments">View All Treatments <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Doctor */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Award className="w-4 h-4" />
                Expert Homeopathy Physician
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Meet Dr. Prasanna Boddupally
              </h2>
              
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                With over <strong>10 years of experience</strong> in treating thyroid disorders and PCOS, 
                Dr. Prasanna has helped thousands of women achieve hormonal balance through 
                safe, natural homeopathic treatment.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">BHMS, MD (Homeopathy)</p>
                    <p className="text-sm text-foreground/70">Specialized in Women's Health</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">5000+ Patients Successfully Treated</p>
                    <p className="text-sm text-foreground/70">Across India & Abroad</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Personalized Treatment Approach</p>
                    <p className="text-sm text-foreground/70">Every patient is unique</p>
                  </div>
                </li>
              </ul>
              
              <Button asChild size="lg">
                <Link to="/about">Learn More About Dr. Prasanna <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative">
                <img 
                  src={doctorImage} 
                  alt="Dr. Prasanna Boddupally - Homeopathy Doctor in Hyderabad" 
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 rounded-full p-3">
                      <Star className="w-6 h-6 text-primary fill-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">4.9 Rating</p>
                      <p className="text-sm text-foreground/70">500+ Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Your journey to better health in 4 simple steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {howItWorks.map((item, idx) => (
              <div key={idx} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-hero text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/70">{item.description}</p>
                
                {/* Connector line */}
                {idx < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Real results from real patients who trusted our treatment
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonials.map((item, idx) => (
              <Card key={idx} className="p-6 bg-white hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6">"{item.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground">{item.author}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground/60">{item.location}</span>
                    <span className="text-sm font-medium text-primary">{item.condition}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button asChild size="lg" variant="outline">
              <Link to="/testimonials">Read More Success Stories <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Book your free consultation with Dr. Prasanna today. 
            Online and in-person appointments available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 h-14">
              <Link to="/book">
                <Calendar className="mr-2 w-5 h-5" /> Book Free Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 h-14 border-white text-white hover:bg-white hover:text-primary">
              <a href="tel:+918179942297">
                <Phone className="mr-2 w-5 h-5" /> Call: +91 81799 42297
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Clinic Info */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center justify-center md:justify-start gap-2">
                  <Clock className="w-5 h-5 text-primary" /> Clinic Hours
                </h3>
                <div className="space-y-2 text-foreground/80">
                  <p><strong>Monday - Saturday:</strong> 10 AM - 1 PM, 5 PM - 8:30 PM</p>
                  <p><strong>Sunday:</strong> 10 AM - 1 PM (By Appointment)</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4 flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="w-5 h-5 text-primary" /> Location
                </h3>
                <div className="space-y-2 text-foreground/80">
                  <p>Hyderabad, Telangana</p>
                  <p className="text-primary font-medium">Online consultations available worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
