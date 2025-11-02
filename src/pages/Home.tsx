import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Heart, Users, Shield, Sparkles, ArrowRight, CheckCircle2, Award, 
  Star, Brain, Calendar, MessageCircle, Zap, Target, ChevronLeft, ChevronRight,
  TrendingUp, Leaf, Sun, Moon, Clock, Phone, Mail
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SEO from "@/components/SEO";
import heroBackground from "@/assets/hero-background.jpg";
import doctorImage from "@/assets/doctor-prasanna.jpg";
import wellnessRituals from "@/assets/wellness-rituals.jpg";
import pcosInfographic from "@/assets/pcos-infographic.jpg";

const Home = () => {
  const [currentStory, setCurrentStory] = useState(0);
  
  const stories = [
    {
      name: "Aarushi, 25",
      condition: "PCOS & Confidence",
      story: "Struggling with irregular periods and self-doubt"
    },
    {
      name: "Meena, 34",
      condition: "Thyroid Fatigue",
      story: "Fighting constant exhaustion and weight gain"
    },
    {
      name: "Riya, 19",
      condition: "Hormonal Understanding",
      story: "Learning to understand her body's signals"
    }
  ];

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

  return (
    <div className="min-h-screen">
      <SEO 
        title="Balance Your Hormones | ThyroCure & PCOS Reset Program - Dr. Prasanna"
        description="Personalized homeopathic & holistic care for PCOS and Thyroid health. Natural healing programs designed by women, for women. Start your journey to hormonal harmony."
        keywords="PCOS treatment, thyroid homeopathy, hormonal balance, women's health, natural healing, Dr. Prasanna Boddupally, ThyroCure program"
        canonicalUrl="https://drprasanna.lovable.app"
        structuredData={structuredData}
      />

      {/* 1️⃣ Hero Banner – "Find Your Hormonal Harmony" */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroBackground} 
            alt="Hormonal Harmony Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />
        </div>

        {/* Floating Floral Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <Heart className="absolute top-1/4 left-[10%] w-6 h-6 text-primary/30 animate-float" />
          <Sparkles className="absolute top-1/3 right-[15%] w-8 h-8 text-accent/40 animate-float-delayed" />
          <Heart className="absolute bottom-1/4 left-[20%] w-7 h-7 text-primary-glow/30 animate-float" />
          <Star className="absolute top-1/2 right-[25%] w-6 h-6 text-accent/35 animate-float-delayed" />
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-4xl mx-auto">
            {/* Centered Content */}
            <div className="space-y-8 animate-fade-in text-center">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span style={{ 
                  background: 'linear-gradient(135deg, #E91E8C 0%, #D946EF 50%, #C026D3 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Balance Your Hormones.
                </span>
                <br />
                <span className="text-gray-900 font-extrabold">Reclaim Your Energy.</span>
                <br />
                <span className="text-gray-900 font-extrabold">Redefine Womanhood.</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto">
                Advanced homeopathy and lifestyle programs for{" "}
                <span className="text-primary font-semibold">PCOS & Thyroid</span> — 
                designed by women, for women.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-hero hover:shadow-glow text-white text-lg px-8 py-6">
                  <Link to="/book">
                    <span className="flex items-center gap-2">
                      Start My Healing Journey
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-6 bg-white/80 backdrop-blur-sm">
                  <Link to="/symptom-checker">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Take Free ThyroCure AI Test
                  </Link>
                </Button>
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

      {/* 2️⃣ Your Hormones, Your Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Every Woman Has a Story.<br />Every Hormone Has a Reason.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              You're not alone in this journey. Thousands of women are finding their path to balance.
            </p>
          </div>

          {/* Story Slider */}
          <div className="relative max-w-4xl mx-auto">
            <Card className="p-12 bg-gradient-lavender border-2 border-primary/20">
              <div className="text-center space-y-6">
                <div className="w-24 h-24 mx-auto bg-gradient-hero rounded-full flex items-center justify-center text-white text-3xl font-bold">
                  {stories[currentStory].name.charAt(0)}
                </div>
                <h3 className="text-3xl font-bold text-foreground">{stories[currentStory].name}</h3>
                <p className="text-xl text-accent font-semibold">{stories[currentStory].condition}</p>
                <p className="text-lg text-muted-foreground italic">"{stories[currentStory].story}"</p>
                
                {/* Navigation */}
                <div className="flex items-center justify-center gap-4 pt-6">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentStory((prev) => (prev === 0 ? stories.length - 1 : prev - 1))}
                    className="rounded-full"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  
                  <div className="flex gap-2">
                    {stories.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          idx === currentStory ? 'bg-primary w-8' : 'bg-primary/30'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentStory((prev) => (prev === stories.length - 1 ? 0 : prev + 1))}
                    className="rounded-full"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </Card>

            <div className="text-center mt-8">
              <Button asChild variant="outline" className="border-primary text-primary">
                <Link to="/symptom-checker">Discover How Hormones Affect You</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3️⃣ Why Women Face PCOS & Thyroid Disorders Today */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              It's Not You — It's Your Hormonal Environment.
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Stress, processed food, sleeplessness, pollution, and emotional burnout silently trigger hormonal chaos.
            </p>
          </div>

          {/* Infographic */}
          <div className="max-w-5xl mx-auto mb-12">
            <img 
              src={pcosInfographic} 
              alt="PCOS & Thyroid Root Causes Infographic" 
              className="rounded-2xl shadow-card w-full"
            />
          </div>

          {/* Interactive Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <Brain className="w-8 h-8" />, title: "Chronic Stress", color: "bg-red-50 border-red-200" },
              { icon: <Sun className="w-8 h-8" />, title: "Poor Sleep", color: "bg-blue-50 border-blue-200" },
              { icon: <Zap className="w-8 h-8" />, title: "Processed Foods", color: "bg-orange-50 border-orange-200" },
              { icon: <Heart className="w-8 h-8" />, title: "Emotional Burnout", color: "bg-pink-50 border-pink-200" }
            ].map((item, idx) => (
              <Card key={idx} className={`p-6 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2 ${item.color} border-2`}>
                <div className="text-primary mb-3 flex justify-center">{item.icon}</div>
                <p className="font-semibold text-foreground text-sm">{item.title}</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-hero">
              <Link to="/symptom-checker">Take Free Hormone Health Quiz</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 4️⃣ Introducing the ThyroCure & PCOS Reset Program */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Your Personalized 4-Pillar Healing System
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive approach that treats the root cause, not just symptoms
            </p>
          </div>

          {/* 4 Pillars - Rotating Display */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { 
                icon: <Target className="w-12 h-12" />,
                title: "Root-Cause Diagnosis",
                description: "AI-powered diagnostics + clinical assessment to identify underlying causes"
              },
              {
                icon: <Heart className="w-12 h-12" />,
                title: "Personalized Homeopathic Care",
                description: "Custom remedies designed for your unique constitution"
              },
              {
                icon: <Leaf className="w-12 h-12" />,
                title: "Hormone-Friendly Nutrition",
                description: "Meal plans that naturally balance your hormones"
              },
              {
                icon: <Sparkles className="w-12 h-12" />,
                title: "Mind-Body Rebalance",
                description: "Yoga, meditation, and stress management techniques"
              }
            ].map((pillar, idx) => (
              <Card key={idx} className="p-8 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-lavender border-2 border-primary/20">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-hero rounded-full flex items-center justify-center text-white">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground">{pillar.description}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-natural shadow-glow">
              <Link to="/protocol">Explore 3-Month Reset Program</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 5️⃣ Meet Dr. Prasanna Bodupally */}
      <section className="py-20 bg-gradient-rose">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="order-2 md:order-1">
              <img 
                src={doctorImage} 
                alt="Dr. Prasanna Boddupally - Homeopathy Physician" 
                className="rounded-3xl shadow-card w-full max-w-md mx-auto border-4 border-white"
              />
            </div>
            
            <div className="space-y-6 order-1 md:order-2">
              <div className="inline-block px-6 py-3 bg-white rounded-full shadow-soft">
                <span className="text-primary font-semibold">Meet Dr. Prasanna</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                A Doctor Who Listens,<br />A Woman Who Understands.
              </h2>
              
              <p className="text-xl text-accent font-semibold italic">
                "Empathy is my strongest medicine."
              </p>
              
              <div className="space-y-4 text-foreground">
                <p className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span>Founder of ThyroCure Clinic</span>
                </p>
                <p className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span>10+ Years of Women's Hormonal Healing</span>
                </p>
                <p className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span>Certified Homeopathy & Functional Medicine Expert</span>
                </p>
                <p className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span>Helped 5000+ Women Reclaim Their Health</span>
                </p>
              </div>
              
              <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                <Link to="/about">
                  Read My Story <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6️⃣ Smart AI Tools for Women's Health */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Your Digital Hormone Coach is Here
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Try interactive tools powered by AI and homeopathy science
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "🤖",
                title: "ThyroCure AI Diagnostic",
                description: "Detect thyroid imbalance in 60 seconds",
                link: "/symptom-checker"
              },
              {
                icon: "💬",
                title: "PCOS CheckBot",
                description: "Chat with your virtual menstrual coach",
                link: "/symptom-checker"
              },
              {
                icon: "🥗",
                title: "Hormone Diet Planner",
                description: "Personalized meal plan + calorie map",
                link: "/book"
              }
            ].map((tool, idx) => (
              <Card key={idx} className="p-8 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-lavender border-2 border-primary/20">
                <div className="text-7xl mb-6">{tool.icon}</div>
                <h3 className="text-2xl font-bold text-foreground mb-3">{tool.title}</h3>
                <p className="text-muted-foreground mb-6">{tool.description}</p>
                <Button asChild variant="outline" className="w-full border-primary text-primary">
                  <Link to={tool.link}>Try Free AI Tools</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7️⃣ Real Women, Real Transformations */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              From Pain to Power — Stories That Inspire
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thousands of women have transformed their cycles, weight, energy, and self-esteem
            </p>
          </div>

          {/* Featured Transformation */}
          <Card className="max-w-4xl mx-auto p-12 mb-12 bg-white border-2 border-primary/30 shadow-glow">
            <div className="flex items-start gap-6 mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
                A
              </div>
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-2">Anjali's Journey</h3>
                <p className="text-accent font-semibold">PCOS & Infertility → Natural Conception</p>
              </div>
            </div>
            <p className="text-lg text-foreground mb-6 italic leading-relaxed">
              "After 3 years of failed fertility treatments and crushing disappointment, I found Dr. Prasanna. 
              Within 8 months on the Sanjiva Protocol, my cycles became regular, I lost 12kg naturally, 
              and I conceived without IVF. Today I'm holding my miracle baby. This isn't just treatment — 
              it's getting your life back."
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-primary-light rounded-lg px-6 py-4 border border-primary/30">
                <p className="text-sm text-muted-foreground">Weight Lost</p>
                <p className="text-2xl font-bold text-primary">12 kg</p>
              </div>
              <div className="bg-primary-light rounded-lg px-6 py-4 border border-primary/30">
                <p className="text-sm text-muted-foreground">Regular Cycles</p>
                <p className="text-2xl font-bold text-primary">✓ Achieved</p>
              </div>
              <div className="bg-primary-light rounded-lg px-6 py-4 border border-primary/30">
                <p className="text-sm text-muted-foreground">Natural Pregnancy</p>
                <p className="text-2xl font-bold text-primary">✓ Success</p>
              </div>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                text: "After 3 years of thyroid medicines, I'm finally medicine-free! Dr. Prasanna's approach truly healed me.",
                author: "Lakshmi R.",
                condition: "Thyroid"
              },
              {
                text: "My chronic migraines vanished within three months. The best decision I ever made!",
                author: "Priya S.",
                condition: "Migraine"
              },
              {
                text: "I lost 15kg naturally and my PCOS symptoms are gone. I feel like myself again!",
                author: "Divya M.",
                condition: "PCOS"
              }
            ].map((testimonial, idx) => (
              <Card key={idx} className="p-6 bg-white hover:shadow-card transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">Treated for {testimonial.condition}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="border-2 border-primary text-primary">
              <Link to="/testimonials">See Their Stories <ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 8️⃣ Healing Beyond Medicine */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-3 bg-primary-light rounded-full mb-4">
              <span className="text-primary font-semibold">Holistic Wellness</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Mind · Body · Hormone · Soul
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Healing is not only about medicines — it's about balance, belief, and being kind to yourself
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-12">
            <div>
              <img 
                src={wellnessRituals} 
                alt="Wellness Rituals for Hormonal Balance" 
                className="rounded-3xl shadow-card"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: "🧘‍♀️", title: "Yoga for Hormone Flow", description: "Gentle movements to restore balance" },
                { icon: "🧘", title: "Guided Meditation", description: "Calm your mind, heal your body" },
                { icon: "😴", title: "Sleep Reset", description: "Restore your natural circadian rhythm" },
                { icon: "💪", title: "Confidence Therapy", description: "Rebuild your self-belief" }
              ].map((item, idx) => (
                <Card key={idx} className="p-6 text-center hover:shadow-card transition-all duration-300 bg-gradient-lavender border border-primary/20">
                  <div className="text-5xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-lg mb-2 text-primary">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-gradient-hero shadow-glow">
              <Link to="/wellness-hub">Start Your Wellness Journey</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 9️⃣ Join Our Hormone Health Community */}
      <section className="py-20 bg-gradient-rose">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              You're Not Alone — You're Among Strong Women
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of women across India healing together
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-12 bg-white border-2 border-primary/30">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">5000+</h3>
                  <p className="text-muted-foreground">Active Members</p>
                </div>
                <div className="text-center">
                  <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Daily</h3>
                  <p className="text-muted-foreground">Live Q&A Sessions</p>
                </div>
                <div className="text-center">
                  <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Weekly</h3>
                  <p className="text-muted-foreground">Wellness Challenges</p>
                </div>
              </div>

              <p className="text-center text-lg text-foreground mb-6">
                Exclusive Telegram & Instagram support circles, expert guidance, and a sisterhood that understands.
              </p>

              <div className="text-center">
                <Button asChild size="lg" className="bg-gradient-natural shadow-glow">
                  <Link to="/contact">Join the Community Free</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 🔟 Book Your Consultation Today */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Your Hormonal Healing Begins Here
              </h2>
              <p className="text-lg text-muted-foreground">
                Take your first step toward natural balance with Dr. Prasanna's personalized homeopathic plan
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Consultation Info */}
              <Card className="p-8 bg-gradient-lavender border-2 border-primary/30">
                <h3 className="text-2xl font-bold text-foreground mb-6">What to Expect</h3>
                <div className="space-y-4">
                  {[
                    { icon: <Clock className="w-6 h-6" />, text: "45-minute comprehensive consultation" },
                    { icon: <Brain className="w-6 h-6" />, text: "AI-powered diagnostic assessment" },
                    { icon: <Heart className="w-6 h-6" />, text: "Personalized treatment roadmap" },
                    { icon: <Phone className="w-6 h-6" />, text: "Online or in-person options available" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="text-primary">{item.icon}</div>
                      <span className="text-foreground">{item.text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-white rounded-xl border border-primary/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-semibold text-foreground">Initial Consultation</span>
                    <span className="text-3xl font-bold text-primary">₹800</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Investment in your lifelong wellness</p>
                </div>
              </Card>

              {/* Quick Contact Form */}
              <Card className="p-8 bg-white border-2 border-primary/30">
                <h3 className="text-2xl font-bold text-foreground mb-6">Book Now</h3>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" className="border-primary/30" />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Phone Number" className="border-primary/30" />
                  </div>
                  <div>
                    <select className="w-full px-4 py-2 rounded-md border border-primary/30 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">Choose Your Concern</option>
                      <option value="PCOS">PCOS / Hormonal Imbalance</option>
                      <option value="Thyroid">Thyroid Issues</option>
                      <option value="Both">Both PCOS & Thyroid</option>
                      <option value="Other">Other Women's Health Concern</option>
                    </select>
                  </div>
                  <Button asChild className="w-full bg-gradient-hero shadow-glow text-lg py-6">
                    <Link to="/book">Book My Consultation Now</Link>
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center mb-3">Or reach out directly:</p>
                  <div className="flex flex-col gap-2">
                    <a href="tel:+919876543210" className="flex items-center justify-center gap-2 text-primary hover:text-primary-dark transition-colors">
                      <Phone className="w-4 h-4" />
                      <span>+91 98765 43210</span>
                    </a>
                    <a href="mailto:contact@drprasanna.com" className="flex items-center justify-center gap-2 text-primary hover:text-primary-dark transition-colors">
                      <Mail className="w-4 h-4" />
                      <span>contact@drprasanna.com</span>
                    </a>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final Trust Section */}
      <section className="py-16 bg-gradient-natural text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-8 text-sm flex-wrap">
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
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-white" />
              <span>4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;