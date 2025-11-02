import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Clock, Users, Shield, Sparkles, MessageCircle, ArrowRight, CheckCircle2, Award, Leaf, Phone, Star, TrendingUp, Zap, Target, Brain, Calendar, IndianRupee, ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEO from "@/components/SEO";
import heroImage from "@/assets/hero-modern.jpg";
import heroHormonalBalance from "@/assets/hero-hormonal-balance.jpg";
import doctorImage from "@/assets/doctor-prasanna.jpg";
import treatmentImage from "@/assets/treatment-natural.jpg";
import wellnessRituals from "@/assets/wellness-rituals.jpg";
import pcosInfographic from "@/assets/pcos-infographic.jpg";
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
                  <Link to="/book">
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

      {/* Trust Badges & Social Proof */}
      <section className="py-12 bg-white border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <p className="text-sm text-muted-foreground">Happy Patients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">90%</div>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">4.9/5 Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Empathy */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Do You Feel Like Your Body Is Working Against You?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              You're not alone. Thousands of women struggle with:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: "😓", text: "Unexplained weight gain that won't budge", color: "bg-red-50 border-red-200" },
              { icon: "😴", text: "Constant fatigue & brain fog", color: "bg-blue-50 border-blue-200" },
              { icon: "😰", text: "Irregular periods & hormonal chaos", color: "bg-purple-50 border-purple-200" },
              { icon: "😢", text: "Hair fall & acne that shakes confidence", color: "bg-orange-50 border-orange-200" },
              { icon: "💔", text: "Difficulty conceiving naturally", color: "bg-pink-50 border-pink-200" },
              { icon: "😞", text: "Mood swings & anxiety", color: "bg-green-50 border-green-200" }
            ].map((problem, idx) => (
              <Card key={idx} className={`p-6 border-2 ${problem.color} hover:shadow-lg transition-all duration-300`}>
                <div className="text-5xl mb-3">{problem.icon}</div>
                <p className="font-semibold text-foreground">{problem.text}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-block bg-primary/10 border-2 border-primary/20 rounded-2xl p-8 max-w-3xl">
              <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">
                "I've tried everything, but nothing seems to work..."
              </p>
              <p className="text-lg text-muted-foreground">
                Sound familiar? <span className="text-primary font-bold">What if the problem isn't you</span> — 
                but the approach?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Dr. Prasanna */}
      <section className="py-20 bg-white">
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

      {/* The Solution - Programs */}
      <section className="py-20 bg-gradient-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary-light rounded-full mb-4">
              <span className="text-primary font-semibold text-sm">The Solution</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              The ThyroCure & PCOS Reset Program
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A <span className="text-primary font-bold">Root-Cause Approach</span> that heals your hormones naturally — no side effects, no lifelong medications
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12">
            {/* ThyroCure Program */}
            <Card className="p-8 hover:shadow-card transition-all duration-300 border-2 border-primary/20 bg-gradient-to-br from-white to-primary/5">
              <div className="text-5xl mb-4">🦋</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">ThyroCure Program</h3>
              <p className="text-muted-foreground mb-6">
                Balance your thyroid naturally without lifelong medication dependency
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Reverse hypothyroidism naturally",
                  "Reduce/eliminate thyroid medication",
                  "Boost energy & metabolism",
                  "Mental clarity & mood balance"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full bg-gradient-hero">
                <Link to="/thyrocure-program">Learn More</Link>
              </Button>
            </Card>

            {/* PCOS Program */}
            <Card className="p-8 hover:shadow-card transition-all duration-300 border-2 border-accent/20 bg-gradient-to-br from-white to-accent/5">
              <div className="text-5xl mb-4">🌸</div>
              <h3 className="text-2xl font-bold text-foreground mb-4">PCOS Reset Program</h3>
              <p className="text-muted-foreground mb-6">
                Restore hormonal balance, regular cycles, and natural fertility
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Regular, pain-free periods",
                  "Natural weight management",
                  "Clear skin & reduced hair fall",
                  "Improved fertility naturally"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full bg-gradient-natural">
                <Link to="/pcos-program">Learn More</Link>
              </Button>
            </Card>
          </div>

          {/* Visual Infographic */}
          <div className="max-w-4xl mx-auto">
            <img 
              src={pcosInfographic} 
              alt="PCOS & Thyroid Treatment Journey" 
              className="rounded-2xl shadow-card w-full"
            />
          </div>
        </div>
      </section>

      {/* How It Works - Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Your Healing Journey in 4 Simple Steps
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From first consultation to complete recovery — here's how we guide you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                number: "01",
                icon: <Calendar className="w-8 h-8" />,
                title: "Book Consultation",
                description: "Free 15-min discovery call to understand your concerns"
              },
              {
                number: "02",
                icon: <Brain className="w-8 h-8" />,
                title: "Deep Diagnosis",
                description: "AI-powered + clinical assessment to find root causes"
              },
              {
                number: "03",
                icon: <Target className="w-8 h-8" />,
                title: "Personalized Plan",
                description: "Custom homeopathy + lifestyle protocol designed for you"
              },
              {
                number: "04",
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Track & Transform",
                description: "Weekly follow-ups, adjustments, and visible results"
              }
            ].map((step, idx) => (
              <div key={idx} className="relative">
                {/* Connector Line */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary to-primary/20 z-0" />
                )}
                
                <Card className="relative p-6 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2 z-10 bg-white">
                  <div className="text-6xl font-bold text-primary/10 mb-2">{step.number}</div>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-hero shadow-glow">
              <Link to="/book">
                Start Your Journey Today <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
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

      {/* Success Stories - Before/After */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary-light rounded-full mb-4">
              <span className="text-primary font-semibold text-sm">Real Results</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Real Women, Real Transformations
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These aren't just testimonials — they're life-changing stories
            </p>
          </div>

          {/* Featured Story */}
          <Card className="max-w-4xl mx-auto p-8 md:p-12 mb-12 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-hero flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                A
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Anjali's Journey</h3>
                <p className="text-muted-foreground">PCOS & Infertility → Natural Conception</p>
              </div>
            </div>
            <p className="text-lg text-foreground mb-6 italic">
              "After 3 years of failed fertility treatments and crushing disappointment, I found Dr. Prasanna. 
              Within 8 months on the Sanjiva Protocol, my cycles became regular, I lost 12kg naturally, 
              and I conceived without IVF. Today I'm holding my miracle baby. This isn't just treatment — 
              it's getting your life back."
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white rounded-lg px-4 py-2 border border-primary/20">
                <p className="text-sm text-muted-foreground">Weight Lost</p>
                <p className="text-xl font-bold text-primary">12 kg</p>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 border border-primary/20">
                <p className="text-sm text-muted-foreground">Regular Cycles</p>
                <p className="text-xl font-bold text-primary">✓ Achieved</p>
              </div>
              <div className="bg-white rounded-lg px-4 py-2 border border-primary/20">
                <p className="text-sm text-muted-foreground">Natural Pregnancy</p>
                <p className="text-xl font-bold text-primary">✓ Success</p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => <Card key={index} className="p-6 hover:shadow-card transition-all duration-300 bg-white border-border">
                <div className="flex items-center gap-2 mb-4">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">Treated for {testimonial.condition}</p>
                </div>
              </Card>)}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
              <Link to="/testimonials">Read 100+ More Stories <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Common Questions Answered
            </h2>
            <p className="text-muted-foreground">
              Everything you need to know before starting your healing journey
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-gradient-subtle">
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                How long does it take to see results?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2">
                Most patients notice improvements within 4-6 weeks. Significant hormonal balance typically occurs 
                in 3-6 months. Complete healing timelines vary based on individual conditions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-gradient-subtle">
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                Is homeopathy safe with my current medications?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2">
                Yes! Homeopathy is completely safe alongside conventional medicine. As you heal, we work with you 
                to gradually reduce dependency on medications under proper guidance.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-gradient-subtle">
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                Do I need to follow strict diet restrictions?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2">
                No extreme restrictions! We provide simple, sustainable lifestyle guidance focused on hormone-friendly 
                nutrition. You'll still enjoy food while healing your body.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-gradient-subtle">
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                What makes your approach different from conventional treatment?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2">
                We treat the root cause, not just symptoms. No lifelong medication dependency, no side effects. 
                Our Sanjiva Protocol combines personalized homeopathy with AI diagnostics, lifestyle coaching, 
                and holistic wellness for complete, lasting healing.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 bg-gradient-subtle">
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                Can I consult online if I'm not in Hyderabad?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pt-2">
                Absolutely! We offer comprehensive online consultations with the same quality of care. Your medicines 
                are shipped directly to you, and follow-ups happen via video calls.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-primary text-primary">
              <Link to="/faq">View All FAQs <ChevronDown className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Investment/Pricing Section */}
      <section className="py-20 bg-gradient-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Transparent Investment in Your Health
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              No hidden costs. Just honest pricing for transformative care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Initial Consultation */}
            <Card className="p-8 text-center hover:shadow-card transition-all duration-300 bg-white">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Initial Consultation</h3>
              <div className="flex items-center justify-center gap-2 mb-4">
                <IndianRupee className="w-6 h-6 text-primary" />
                <span className="text-4xl font-bold text-primary">800</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                45-min comprehensive assessment + AI diagnostic report
              </p>
              <Button asChild className="w-full" variant="outline">
                <Link to="/book">Book Now</Link>
              </Button>
            </Card>

            {/* 3-Month Program */}
            <Card className="p-8 text-center hover:shadow-card transition-all duration-300 bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-2 text-foreground">3-Month Program</h3>
              <div className="flex items-center justify-center gap-2 mb-4">
                <IndianRupee className="w-6 h-6 text-primary" />
                <span className="text-4xl font-bold text-primary">15,000</span>
              </div>
              <ul className="text-sm text-left space-y-2 mb-6 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Personalized homeopathy medicines</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Weekly progress tracking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Lifestyle & diet guidance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>AI wellness tools access</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-gradient-hero">
                <Link to="/book">Start Program</Link>
              </Button>
            </Card>

            {/* 6-Month Program */}
            <Card className="p-8 text-center hover:shadow-card transition-all duration-300 bg-white">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-xl font-bold mb-2 text-foreground">6-Month Complete Care</h3>
              <div className="flex items-center justify-center gap-2 mb-4">
                <IndianRupee className="w-6 h-6 text-primary" />
                <span className="text-4xl font-bold text-primary">28,000</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Everything in 3-month +</p>
              <ul className="text-sm text-left space-y-2 mb-6 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Extended support & follow-ups</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Free wellness workshop access</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>Priority consultation booking</span>
                </li>
              </ul>
              <Button asChild className="w-full" variant="outline">
                <Link to="/book">Get Started</Link>
              </Button>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              💳 Easy payment options available | 🔒 100% secure checkout
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-natural text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
            <Award className="w-5 h-5" />
            <span className="font-semibold">Take the First Step Toward Hormonal Wellness</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Your Body Knows How to Heal.<br />
            Let's Help It Remember.
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 5000+ women who chose natural healing over lifelong medications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow text-lg px-10 py-7">
              <Link to="/book">
                Book My Consultation Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 backdrop-blur-sm text-lg px-10 py-7">
              <Link to="/symptom-checker">
                <Sparkles className="mr-2 w-5 h-5" />
                Take Free Health Assessment
              </Link>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>100% Safe & Natural</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>5000+ Success Stories</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              <span>10+ Years Experience</span>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;