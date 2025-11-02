import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ClipboardList, MessageSquare, UtensilsCrossed, Calendar, Activity, Bot } from "lucide-react";
import SEO from "@/components/SEO";

const WellnessHub = () => {
  const tools = [
    {
      icon: <ClipboardList className="w-12 h-12" />,
      title: "Hormone Quiz",
      description: "Discover your hormonal type and understand your body's unique patterns",
      link: "/symptom-checker",
      status: "Available"
    },
    {
      icon: <MessageSquare className="w-12 h-12" />,
      title: "Symptom Checker",
      description: "Get personalized insights based on your symptoms and health concerns",
      link: "/symptom-checker",
      status: "Available"
    },
    {
      icon: <UtensilsCrossed className="w-12 h-12" />,
      title: "Nutrition Planner",
      description: "Personalized meal plans designed for hormonal balance and metabolic health",
      link: "#",
      status: "Coming Soon"
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Cycle Tracker",
      description: "Monitor your menstrual cycle and identify patterns for better health management",
      link: "#",
      status: "Coming Soon"
    },
    {
      icon: <Activity className="w-12 h-12" />,
      title: "Stress Meter",
      description: "Assess your stress levels and get personalized relaxation techniques",
      link: "#",
      status: "Coming Soon"
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: "AI Chat Assistant 'Mira'",
      description: "Chat with your virtual menstrual coach for instant guidance and support",
      link: "#",
      status: "Coming Soon"
    }
  ];

  return (
    <>
      <SEO 
        title="Wellness Hub | AI-Powered Health Tools"
        description="Explore our suite of interactive wellness tools including hormone quiz, symptom checker, nutrition planner, cycle tracker, and AI health assistant Mira."
        keywords="wellness tools, hormone quiz, symptom checker, health tracker, AI health assistant, women's health tools"
      />
      <Navigation />
      <div className="min-h-screen">
        {/* Hero */}
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-gradient-bright">Wellness Hub:</span> Your Journey to Holistic Health
                <br />Your Digital Wellness Companion
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                Explore, track, and learn about your hormonal health
              </p>
              <p className="text-lg text-muted-foreground">
                Interactive tools designed to support your journey to hormonal balance
              </p>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {tools.map((tool, index) => (
                <Card 
                  key={index} 
                  className={`p-8 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 ${
                    tool.status === "Coming Soon" ? "opacity-75" : ""
                  }`}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-20 h-20 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground">
                      {tool.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{tool.title}</h3>
                    <p className="text-muted-foreground text-sm">{tool.description}</p>
                    {tool.status === "Available" ? (
                      <Link 
                        to={tool.link}
                        className="text-primary font-semibold hover:underline"
                      >
                        Try Now →
                      </Link>
                    ) : (
                      <span className="text-xs font-semibold text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                        {tool.status}
                      </span>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-12">
                Why Use Our Wellness Tools?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                    1
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Personalized Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Get recommendations tailored to your unique hormonal profile
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                    2
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Track Progress</h3>
                  <p className="text-sm text-muted-foreground">
                    Monitor improvements over time with visual dashboards
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                    3
                  </div>
                  <h3 className="font-bold text-foreground mb-2">Expert-Backed</h3>
                  <p className="text-sm text-muted-foreground">
                    All tools developed with Dr. Prasanna's clinical expertise
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Card className="p-8 shadow-card bg-gradient-subtle border-primary">
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Ready for Personalized Care?
                </h2>
                <p className="text-muted-foreground mb-6">
                  While these tools provide valuable insights, nothing beats a personalized consultation with Dr. Prasanna.
                </p>
                <Link 
                  to="/contact"
                  className="inline-block bg-gradient-hero text-primary-foreground px-8 py-3 rounded-lg font-semibold shadow-soft hover:shadow-glow transition-all"
                >
                  Book Your Consultation
                </Link>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default WellnessHub;
