import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Clock, Users, Shield, Sparkles, MessageCircle, ArrowRight, CheckCircle2, Award, Leaf, Phone, Star, TrendingUp } from "lucide-react";
import SEO from "@/components/SEO";
import heroImage from "@/assets/hero-modern.jpg";
import heroHormonalBalance from "@/assets/hero-hormonal-balance.jpg";
import doctorImage from "@/assets/doctor-prasanna.jpg";
import treatmentImage from "@/assets/treatment-natural.jpg";
import wellnessRituals from "@/assets/wellness-rituals.jpg";
const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Prasanna Boddupally",
    "image": "https://drprasanna.lovable.app/doctor-prasanna.jpg",
    "description": "Expert homeopathy physician specializing in chronic conditions, thyroid disorders, PCOD, and natural healing.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    },
    "medicalSpecialty": ["Homeopathy", "Alternative Medicine"],
    "priceRange": "₹₹",
    "telephone": "+91-9876543210",
    "url": "https://drprasanna.lovable.app",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    }
  };

  const conditions = [{
    category: "Women's Health",
    items: ["PCOD", "Infertility", "Thyroid"]
  }, {
    category: "Hormonal & Metabolic",
    items: ["Obesity", "Diabetes", "Cholesterol"]
  }, {
    category: "Pain & Joint",
    items: ["Arthritis", "Sciatica", "Spondylitis"]
  }, {
    category: "Skin & Hair",
    items: ["Acne", "Hair Fall", "Psoriasis", "Vitiligo"]
  }, {
    category: "Respiratory",
    items: ["Asthma", "Sinusitis", "Allergies"]
  }, {
    category: "Lifestyle",
    items: ["Hypertension", "Kidney Stones", "Gall Stones"]
  }];
  const whyChooseUs = [{
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Zero Side Effects",
    description: "Safe, natural, and gentle healing for all ages."
  }, {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Sustainable Healing",
    description: "Focus on the root cause, not just symptoms."
  }, {
    icon: <Heart className="w-8 h-8 text-primary" />,
    title: "Personalized Care",
    description: "Every treatment plan is made uniquely for you."
  }, {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Trusted by Thousands",
    description: "90% success in infertility & thyroid cases."
  }];
  const protocolSteps = [{
    number: "01",
    title: "Consult & Understand",
    description: "Comprehensive evaluation of physical and emotional factors"
  }, {
    number: "02",
    title: "Tailored Plan",
    description: "Customized homeopathic remedies for your constitution"
  }, {
    number: "03",
    title: "Lifestyle Guidance",
    description: "Simple, realistic habits for lasting wellness"
  }, {
    number: "04",
    title: "Sustained Healing",
    description: "Regular follow-ups to ensure zero recurrence"
  }];
  const testimonials = [{
    text: "After 3 years of thyroid medicines, I'm finally medicine-free! Dr. Prasanna's approach truly healed me.",
    author: "Lakshmi R.",
    condition: "Thyroid"
  }, {
    text: "We conceived naturally after 8 months of treatment. Forever grateful for the Sanjiva Protocol.",
    author: "Anjali & Karthik",
    condition: "Infertility"
  }, {
    text: "My chronic migraines vanished within three months. The best decision I ever made!",
    author: "Priya S.",
    condition: "Migraine"
  }];
  return <div className="min-h-screen">
      <SEO 
        title="Dr. Prasanna Boddupally - Expert Homeopathy Physician in Hyderabad"
        description="Experience natural healing with Dr. Prasanna's Sanjiva Protocol. Specialized treatment for thyroid, PCOD, skin disorders, arthritis & chronic conditions. 15+ years experience."
        keywords="homeopathy doctor Hyderabad, Dr. Prasanna Boddupally, thyroid treatment homeopathy, PCOD homeopathy, chronic disease, natural healing, Sanjiva Protocol"
        canonicalUrl="https://drprasanna.lovable.app"
        structuredData={structuredData}
      />
      {/* Hero Section - Modern & Animated */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-light/20 via-background to-secondary/30">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-primary-glow/5 rounded-full blur-3xl animate-pulse" />
        </div>

        {/* Floating Leaf Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Leaf className="absolute top-1/4 left-[15%] w-8 h-8 text-primary/20 animate-float" />
          <Leaf className="absolute top-1/3 right-[20%] w-6 h-6 text-primary/15 animate-float-delayed" />
          <Sparkles className="absolute bottom-1/4 left-[25%] w-10 h-10 text-primary/10 animate-float" />
          <Heart className="absolute top-1/2 right-[15%] w-7 h-7 text-primary/20 animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-soft border border-primary/20 hover:shadow-glow transition-all duration-300">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-foreground">Trusted by 5000+ Patients</span>
              </div>

              {/* Main Heading with Gradient */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
                    Balance Your Hormones
                  </span>
                  <br />
                  <span className="text-foreground">Reclaim Your Energy</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                  Personalized Homeopathic & Holistic Care for{" "}
                  <span className="text-primary font-bold">PCOS + Thyroid Health</span>
                </p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <Shield className="w-5 h-5" />, text: "100% Natural" },
                  { icon: <Heart className="w-5 h-5" />, text: "Root Cause Treatment" },
                  { icon: <Award className="w-5 h-5" />, text: "10+ Years Experience" },
                  { icon: <TrendingUp className="w-5 h-5" />, text: "90% Success Rate" }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-3 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                    <div className="text-primary">{feature.icon}</div>
                    <span className="font-semibold text-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild size="lg" className="bg-gradient-hero hover:shadow-glow text-white text-lg px-8 py-6 animate-pulse-glow">
                  <Link to="/contact">
                    <span className="flex items-center gap-2">
                      Book My Consultation
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6 backdrop-blur-sm bg-white/80">
                  <Link to="/symptom-checker" className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Take Free ThyroCure AI Test
                  </Link>
                </Button>
              </div>

              {/* Quick Contact */}
              <div className="flex items-center gap-4 pt-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-glow border-2 border-white" />
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-bold text-foreground">Join 5000+ Happy Patients</p>
                  <p className="text-muted-foreground">Start your healing journey today</p>
                </div>
              </div>
            </div>

            {/* Right Content - Image with Decorative Elements */}
            <div className="relative hidden lg:block">
              <div className="relative z-10 animate-fade-in">
                {/* Main Image Card */}
                <div className="relative rounded-3xl overflow-hidden shadow-soft border-4 border-white bg-white p-4 hover:shadow-glow transition-all duration-500 hover:-translate-y-2">
                  <img 
                    src={heroImage} 
                    alt="Natural Homeopathy Treatment" 
                    className="rounded-2xl w-full h-auto"
                  />
                  
                  {/* Floating Info Cards */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-card p-4 border border-primary/20 animate-float">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-foreground">5000+</p>
                        <p className="text-xs text-muted-foreground">Patients Treated</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-6 -right-6 bg-gradient-natural text-white rounded-2xl shadow-card p-4 animate-float-delayed">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                        <Award className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold">100%</p>
                        <p className="text-xs text-white/90">Result Oriented</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Dots */}
                <div className="absolute -bottom-8 -right-8 w-24 h-24 grid grid-cols-4 gap-2 opacity-20">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-2 h-2 rounded-full bg-primary" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Meet Dr. Prasanna */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <img src={doctorImage} alt="Dr. Prasanna Boddupally" className="rounded-2xl shadow-card w-full max-w-md mx-auto" />
            </div>
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary-light rounded-full">
                <span className="text-primary font-semibold text-sm">Meet Dr. Prasanna</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">"Every symptom has a story  I help you heal from its root."</h2>
              <div className="space-y-3 text-muted-foreground">
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span><strong>Dr. Prasanna Boddupally</strong>, Homeopathy Physician – Hyderabad</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>10+ Years of Experience</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Languages: English | Telugu | Hindi</span>
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Creator of the <strong>Sanjiva Protocol</strong></span>
                </p>
              </div>
              <p className="text-foreground">
                Ensuring no side effects, no recurrence, and no food restrictions. 
                Every patient receives personalized care focused on complete healing.
              </p>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary-light">
                <Link to="/about">Know More About Dr. Prasanna <ArrowRight className="ml-2 w-4 h-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat - A to Z */}
      <section className="py-20 bg-gradient-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The ThyroCure & PCOS Reset Program
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Heal your hormones from the inside out — naturally and permanently
            </p>
          </div>
          
          {/* 4 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Root-Cause Diagnosis</h3>
              <p className="text-sm text-muted-foreground">Advanced AI + homeopathic analysis</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4">💊</div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Personalized Homeopathy</h3>
              <p className="text-sm text-muted-foreground">Customized natural solutions</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4">🥗</div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Hormone-Friendly Nutrition</h3>
              <p className="text-sm text-muted-foreground">Lifestyle & meal planning</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
              <div className="text-4xl mb-4">🧘‍♀️</div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Mind-Body Healing</h3>
              <p className="text-sm text-muted-foreground">Rituals for complete wellness</p>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-gradient-hero shadow-soft">
              <Link to="/protocol">Start My 3-Month Transformation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* AI-Powered Tools */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              AI-Powered Wellness Tools
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Your digital wellness companion for hormonal health
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6 hover:shadow-soft transition-all duration-300 bg-background border-border">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="font-bold text-lg mb-2 text-foreground">ThyroCure AI Diagnostic</h3>
              <p className="text-sm text-muted-foreground mb-4">Understand thyroid imbalance in 60 seconds</p>
              <Button asChild variant="outline" className="w-full border-primary text-primary">
                <Link to="/symptom-checker">Try Now</Link>
              </Button>
            </Card>
            <Card className="p-6 hover:shadow-soft transition-all duration-300 bg-background border-border">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-bold text-lg mb-2 text-foreground">PCOS CheckBot</h3>
              <p className="text-sm text-muted-foreground mb-4">Chat with your virtual menstrual coach</p>
              <Button asChild variant="outline" className="w-full border-primary text-primary">
                <Link to="/symptom-checker">Start Chat</Link>
              </Button>
            </Card>
            <Card className="p-6 hover:shadow-soft transition-all duration-300 bg-background border-border">
              <div className="text-4xl mb-4">🥗</div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Hormone Diet Planner</h3>
              <p className="text-sm text-muted-foreground mb-4">Personalized meal plan + calorie map</p>
              <Button asChild variant="outline" className="w-full border-primary text-primary">
                <Link to="/contact">Get Started</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Healing Beyond Medicine */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary-light rounded-full mb-4">
              <span className="text-primary font-semibold text-sm">Holistic Wellness</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Healing Beyond Medicine
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Healing is not only about medicines — it's about balance, belief, and being kind to yourself
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 text-center hover:shadow-soft transition-all duration-300 bg-background border-border">
              <div className="text-4xl mb-4">🧘‍♀️</div>
              <h3 className="font-bold text-lg mb-2 text-primary">Yoga for Hormone Flow</h3>
              <p className="text-sm text-muted-foreground">Gentle movements to restore balance</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-soft transition-all duration-300 bg-background border-border">
              <div className="text-4xl mb-4">🧘</div>
              <h3 className="font-bold text-lg mb-2 text-primary">Guided Meditation</h3>
              <p className="text-sm text-muted-foreground">Calm your mind, heal your body</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-soft transition-all duration-300 bg-background border-border">
              <div className="text-4xl mb-4">😴</div>
              <h3 className="font-bold text-lg mb-2 text-primary">Sleep Reset</h3>
              <p className="text-sm text-muted-foreground">Restore your natural circadian rhythm</p>
            </Card>
            <Card className="p-6 text-center hover:shadow-soft transition-all duration-300 bg-background border-border">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="font-bold text-lg mb-2 text-primary">Confidence Therapy</h3>
              <p className="text-sm text-muted-foreground">Rebuild your self-belief</p>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild className="bg-gradient-hero shadow-soft">
              <Link to="/treatments">Explore All Wellness Resources</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Real Women, Real Results
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Healing stories from women who reclaimed their health
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => <Card key={index} className="p-6 hover:shadow-soft transition-all duration-300 bg-background border-border">
                <MessageCircle className="w-8 h-8 text-primary mb-4" />
                <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">Treated for {testimonial.condition}</p>
                </div>
              </Card>)}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary-light">
              <Link to="/testimonials">Read More Success Stories <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-natural text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
            <Award className="w-5 h-5" />
            <span className="font-semibold">Empowering Women Through Hormonal Healing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Find Your Balance Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Step into a personalized journey of recovery and rejuvenation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow">
              <Link to="/contact">Book My Consultation Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 backdrop-blur-sm">
              <Link to="/symptom-checker">Take Free Health Assessment</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;