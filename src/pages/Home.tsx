import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Clock, Users, Shield, Sparkles, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import doctorImage from "@/assets/doctor-prasanna.jpg";
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
      <section className="relative h-[600px] flex items-center justify-center text-center bg-cover bg-center" style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroImage})`
    }}>
        <div className="container mx-auto px-4 z-10 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Healing Through Simplicity — <br />The Sanjiva Protocol Way
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Natural, long-lasting homeopathic care trusted by thousands of patients
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-soft">
              <Link to="/contact">Book Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur-sm">
              <Link to="/testimonials">Watch Success Stories</Link>
            </Button>
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

      {/* Conditions We Treat */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Conditions We Treat
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expert homeopathic treatment for chronic conditions with proven results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary-light">
              <Link to="/treatments">View All Treatments <ArrowRight className="ml-2 w-4 h-4" /></Link>
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
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Take the First Step Toward Natural Healing
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your consultation today and experience the Sanjiva Protocol difference
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/contact">Book Appointment Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="https://wa.me/918179942297" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;