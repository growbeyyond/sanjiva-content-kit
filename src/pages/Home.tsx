import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Clock, Users, Shield, Sparkles, MessageCircle, ArrowRight, CheckCircle2, Award, Leaf } from "lucide-react";
import heroImage from "@/assets/hero-homeopathy.jpg";
import doctorImage from "@/assets/doctor-prasanna.jpg";
import treatmentImage from "@/assets/treatment-natural.jpg";
const Home = () => {
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
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center justify-center bg-gradient-subtle overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Natural Homeopathy" className="w-full h-full object-cover opacity-90" />
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6 animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary-light px-4 py-2 rounded-full">
                <Leaf className="w-4 h-4 text-primary" />
                <span className="text-primary font-semibold text-sm">Safe, Effective, Reliable</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Sanjivani Homeopathy
              </h1>
              <p className="text-2xl md:text-3xl text-primary font-semibold italic">
                Safe. Effective. Reliable.
              </p>
              <p className="text-lg text-muted-foreground max-w-xl">
                Choose homeopathy for treatments that work gently on the body, ensuring safe and effective results without side effects. Natural healing for lasting wellness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-gradient-hero hover:shadow-glow text-white">
                  <Link to="/contact">Book Appointment</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary-light">
                  <a href="https://wa.me/918179942297" target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
            <div className="hidden md:block animate-slide-up">
              <img src={treatmentImage} alt="Homeopathy Treatment" className="rounded-2xl shadow-soft" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-gradient-natural text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <Users className="w-12 h-12" />
              <p className="text-3xl font-bold">5000+</p>
              <p className="text-white/90">Happy Patients</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Award className="w-12 h-12" />
              <p className="text-3xl font-bold">Certified</p>
              <p className="text-white/90">Medicine & Treatment</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-12 h-12" />
              <p className="text-3xl font-bold">100%</p>
              <p className="text-white/90">Result Oriented</p>
            </div>
          </div>
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
              We Treat A-Z Problems with Homeopathy
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive homeopathic treatment for all conditions from Acne to Vitiligo
            </p>
          </div>
          
          {/* Featured Treatments */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {conditions.map((condition, index) => <Card key={index} className="p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 border-border bg-card">
                <h3 className="font-bold text-lg mb-3 text-primary">{condition.category}</h3>
                <ul className="space-y-2">
                  {condition.items.map((item, idx) => <li key={idx} className="text-muted-foreground flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      {item}
                    </li>)}
                </ul>
              </Card>)}
          </div>

          {/* A-Z Quick List */}
          <div className="bg-white rounded-2xl shadow-card p-8 max-w-5xl mx-auto">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">Complete Treatment List</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
              <div>
                <h4 className="font-bold text-primary mb-3">A-D</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Acne & Allergies</li>
                  <li>• Asthma & Arthritis</li>
                  <li>• Blood Pressure</li>
                  <li>• Cholesterol</li>
                  <li>• Diabetes</li>
                  <li>• Depression</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-3">E-K</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Eczema</li>
                  <li>• Gout & Glaucoma</li>
                  <li>• Hair Fall</li>
                  <li>• Hypothyroid</li>
                  <li>• Infertility</li>
                  <li>• Kidney Stones</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-3">L-P</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Migraine</li>
                  <li>• Obesity</li>
                  <li>• PCOD & PCOS</li>
                  <li>• Piles</li>
                  <li>• Psoriasis</li>
                  <li>• Paralysis</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-3">R-Z</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Rheumatoid Arthritis</li>
                  <li>• Sinusitis</li>
                  <li>• Thyroid Disorders</li>
                  <li>• Tonsillitis</li>
                  <li>• Vitiligo</li>
                  <li>• & Many More...</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary-light">
              <Link to="/treatments">View Detailed Treatment Information <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of holistic, compassionate care
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((feature, index) => <Card key={index} className="p-6 text-center hover:shadow-soft transition-all duration-300 bg-background border-border">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Sanjiva Protocol */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-primary-light rounded-full mb-4">
              <span className="text-primary font-semibold text-sm">Our Signature Approach</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Sanjiva Protocol
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A systematic healing journey designed for lasting wellness
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {protocolSteps.map((step, index) => <div key={index} className="relative">
                <Card className="p-6 h-full hover:shadow-soft transition-all duration-300 bg-background border-border">
                  <div className="text-5xl font-bold text-primary-light mb-4">{step.number}</div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </Card>
                {index < protocolSteps.length - 1 && <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>}
              </div>)}
          </div>
          <div className="text-center mt-8">
            <Button asChild className="bg-gradient-hero shadow-soft">
              <Link to="/protocol">Learn More About Our Protocol</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Patient Success Stories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories of healing and hope from our patients
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
            <span className="font-semibold">Certified with 100% Result Oriented Treatment</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help? Book an Appointment with One Call
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience natural healing with our proven Sanjiva Protocol
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 shadow-glow">
              <Link to="/contact">Book Appointment Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 backdrop-blur-sm">
              <a href="https://wa.me/918179942297" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp: +91-81799 42297
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;