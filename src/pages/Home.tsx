import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  CheckCircle2, ArrowRight, Star, Phone, MessageCircle, 
  Clock, Users, Shield, Award, Heart, Leaf, Sparkles,
  MapPin, Calendar, ChevronLeft, ChevronRight
} from "lucide-react";
import SEO from "@/components/SEO";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import doctorImage from "@/assets/doctor-prasanna.jpg";
import heroWellness from "@/assets/hero-wellness-1.jpg";
import heroThyroid from "@/assets/hero-thyroid-care.jpg";
import heroPcos from "@/assets/hero-pcos-care.jpg";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      image: heroWellness,
      title: "Find Your",
      highlight: "Hormonal Balance",
      subtitle: "Naturally",
      description: "Specialized homeopathic treatment for Thyroid, PCOS, and hormonal disorders. Trusted by 5000+ women across India."
    },
    {
      image: heroThyroid,
      title: "Expert",
      highlight: "Thyroid Care",
      subtitle: "That Works",
      description: "Natural treatment for Hypothyroidism, Hyperthyroidism & Hashimoto's. Get lasting relief without side effects."
    },
    {
      image: heroPcos,
      title: "Overcome",
      highlight: "PCOS",
      subtitle: "Naturally",
      description: "Regulate your periods, manage weight, and restore hormonal balance with personalized homeopathic treatment."
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

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
      text: "My thyroid levels are now completely normal after 6 months of treatment. No more fatigue, no more mood swings!", 
      author: "Lakshmi R.", 
      location: "Hyderabad",
      condition: "Thyroid" 
    },
    { 
      text: "After years of struggling with PCOS, my periods are finally regular. I've lost 12kg naturally!", 
      author: "Divya M.", 
      location: "Bangalore",
      condition: "PCOS" 
    },
    { 
      text: "We tried for 3 years to conceive. With Dr. Prasanna's treatment, we're now blessed with a baby girl!", 
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
    <>
      <AnnouncementBanner />
      <Navigation />
      <div className="min-h-screen">
        <SEO 
          title="Dr. Prasanna Boddupally | Thyroid & PCOS Homeopathy - Hyderabad"
          description="Expert homeopathic treatment for thyroid, PCOS, and hormonal issues in Hyderabad. Natural healing with 10+ years experience. Book free consultation today."
          keywords="thyroid treatment Hyderabad, PCOS treatment, homeopathy doctor, Dr Prasanna Boddupally, hormonal imbalance"
          canonicalUrl="https://drprasannaboddupally.in"
          structuredData={structuredData}
        />

      {/* Hero Carousel Section - Full viewport height minus navbar */}
      <section className="relative h-[550px] md:h-[600px] overflow-hidden">
        {/* Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/50" />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
                <Sparkles className="w-4 h-4" />
                Natural Healing • No Side Effects
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                {heroSlides[currentSlide].title}{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  {heroSlides[currentSlide].highlight}
                </span>{" "}
                {heroSlides[currentSlide].subtitle}
              </h1>
              
              <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed max-w-xl">
                {heroSlides[currentSlide].description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-gradient-hero text-lg px-8 h-14 shadow-lg hover:shadow-xl transition-shadow">
                  <Link to="/book">
                    Book Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 h-14 bg-background/60 backdrop-blur-sm border-border/50">
                  <a href="https://wa.me/918179942297" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 w-5 h-5" /> WhatsApp Us
                  </a>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 md:gap-6 text-sm text-foreground/80">
                <div className="flex items-center gap-2 bg-background/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 bg-background/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>5000+ Patients</span>
                </div>
                <div className="flex items-center gap-2 bg-background/40 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Online Consultations</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-colors shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-background transition-colors shadow-lg"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide 
                  ? "bg-primary w-8" 
                  : "bg-foreground/30 hover:bg-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Quick Stats Bar - Compact */}
      <section className="bg-gradient-hero py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white text-center">
            <div>
              <p className="text-2xl md:text-3xl font-bold">5000+</p>
              <p className="text-xs md:text-sm opacity-90">Happy Patients</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold">10+</p>
              <p className="text-xs md:text-sm opacity-90">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold">4.9/5</p>
              <p className="text-xs md:text-sm opacity-90">Patient Rating</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold">100%</p>
              <p className="text-xs md:text-sm opacity-90">Natural Treatment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat - Consistent section padding */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Conditions We Treat
            </h2>
            <p className="text-foreground/70 max-w-xl mx-auto">
              Specialized homeopathic care for women's hormonal health problems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {treatments.map((item, idx) => (
              <Link to={item.link} key={idx} className="group">
                <Card className={`p-5 h-full hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br ${item.gradient} group-hover:-translate-y-1`}>
                  <item.icon className="w-10 h-10 text-primary mb-3" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.name}</h3>
                  <p className="text-sm text-foreground/70">{item.description}</p>
                  <div className="mt-3 text-primary font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/treatments">View All Treatments <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Doctor - Consistent section padding */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Award className="w-4 h-4" />
                Expert Homeopathy Physician
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
                Meet Dr. Prasanna Boddupally
              </h2>
              
              <p className="text-foreground/80 mb-5 leading-relaxed">
                With over <strong>10 years of experience</strong> in treating thyroid disorders and PCOS, 
                Dr. Prasanna has helped thousands of women achieve hormonal balance through 
                safe, natural homeopathic treatment.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">BHMS, MD (Homeopathy)</p>
                    <p className="text-sm text-foreground/70">Specialized in Women's Health</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">5000+ Patients Successfully Treated</p>
                    <p className="text-sm text-foreground/70">Across India & Abroad</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Personalized Treatment Approach</p>
                    <p className="text-sm text-foreground/70">Every patient is unique</p>
                  </div>
                </li>
              </ul>
              
              <Button asChild>
                <Link to="/about">Learn More <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative">
                <img 
                  src={doctorImage} 
                  alt="Dr. Prasanna Boddupally - Homeopathy Doctor in Hyderabad" 
                  className="rounded-2xl shadow-2xl w-full max-w-sm mx-auto"
                />
                {/* Floating Card */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-primary/10 rounded-full p-2">
                      <Star className="w-5 h-5 text-primary fill-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm">4.9 Rating</p>
                      <p className="text-xs text-foreground/70">500+ Reviews</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Consistent section padding */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              How It Works
            </h2>
            <p className="text-foreground/70 max-w-xl mx-auto">
              Your journey to better health in 4 simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {howItWorks.map((item, idx) => (
              <div key={idx} className="text-center relative">
                <div className="w-14 h-14 bg-gradient-hero text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.description}</p>
                
                {/* Connector line */}
                {idx < howItWorks.length - 1 && idx !== 1 && (
                  <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-primary/20" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Consistent section padding */}
      <section className="py-12 md:py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Success Stories
            </h2>
            <p className="text-foreground/70 max-w-xl mx-auto">
              Real results from real patients who trusted our treatment
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {testimonials.map((item, idx) => (
              <Card key={idx} className="p-5 bg-white hover:shadow-lg transition-shadow">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-4 text-sm">"{item.text}"</p>
                <div className="border-t border-border pt-3">
                  <p className="font-bold text-foreground text-sm">{item.author}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-foreground/60">{item.location}</span>
                    <span className="text-xs font-medium text-primary">{item.condition}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link to="/testimonials">Read More Success Stories <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Patients Trust Us - NEW SECTION */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              Why Patients Choose Us
            </h2>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { icon: Shield, title: "Safe & Natural", desc: "No side effects, safe for all ages including pregnant women" },
                { icon: Users, title: "Family-Friendly", desc: "Treat entire family under one roof, children to seniors" },
                { icon: Award, title: "Expert Care", desc: "10+ years specialization in hormonal disorders" },
                { icon: Heart, title: "Holistic Approach", desc: "Address root cause, not just symptoms" }
              ].map((item, idx) => (
                <Card key={idx} className="p-4 text-center hover:shadow-lg transition-all bg-secondary">
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-bold text-foreground text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-foreground/70">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Slightly less padding */}
      <section className="py-10 md:py-14 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Ready to Start Your Healing Journey?
          </h2>
          <p className="text-lg opacity-90 mb-6 max-w-xl mx-auto">
            Book your free consultation with Dr. Prasanna today. 
            Online and in-person appointments available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 h-12">
              <Link to="/book">
                <Calendar className="mr-2 w-5 h-5" /> Book Free Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 h-12 border-white text-white hover:bg-white hover:text-primary">
              <a href="tel:+918179942297">
                <Phone className="mr-2 w-5 h-5" /> Call: +91 81799 42297
              </a>
            </Button>
          </div>
          <p className="text-sm opacity-80 mt-4">
            Available in English, Telugu & Hindi • Online consultations for patients worldwide
          </p>
        </div>
      </section>

      {/* Clinic Info - Compact footer section */}
      <section className="py-8 bg-background border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 text-center md:text-left">
              <div>
                <h3 className="font-bold text-foreground mb-3 flex items-center justify-center md:justify-start gap-2">
                  <Clock className="w-5 h-5 text-primary" /> Clinic Hours
                </h3>
                <div className="space-y-1 text-sm text-foreground/80">
                  <p><strong>Mon - Sat:</strong> 10 AM - 1 PM, 5 PM - 8:30 PM</p>
                  <p><strong>Sunday:</strong> 10 AM - 1 PM (By Appointment)</p>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-foreground mb-3 flex items-center justify-center md:justify-start gap-2">
                  <MapPin className="w-5 h-5 text-primary" /> Location
                </h3>
                <div className="space-y-1 text-sm text-foreground/80">
                  <p>Hyderabad, Telangana</p>
                  <p className="text-primary font-medium">Online consultations available worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
