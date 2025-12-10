import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TopBanner from "@/components/TopBanner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";
import { MessageCircle, Phone, Clock, CheckCircle } from "lucide-react";

const BookingPage = () => {
  const whatsappNumber = "916304633491";
  const message = "Hi! I'd like to book a consultation with Dr. Prasanna for homeopathy treatment.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <TopBanner />
      <Helmet>
        <title>Book Appointment - Dr. Prasanna Boddupally</title>
        <meta name="description" content="Book your homeopathy consultation with Dr. Prasanna Boddupally via WhatsApp. Quick and easy appointment booking." />
        <link rel="canonical" href="https://drprasannaboddupally.in/book" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-subtle">
        <section className="pt-32 pb-20 px-4">
          <div className="container mx-auto max-w-2xl">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
                Book Your Appointment
              </h1>
              <p className="text-lg text-foreground/90">
                Connect with us on WhatsApp for quick and easy appointment booking
              </p>
            </div>

            <Card className="p-8 text-center space-y-6">
              <div className="w-20 h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto">
                <MessageCircle className="w-10 h-10 text-[#25D366]" />
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-3">Book via WhatsApp</h2>
                <p className="text-foreground/70 mb-6">
                  Click the button below to start a conversation and schedule your consultation with Dr. Prasanna
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg py-6">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Book on WhatsApp
                  </Button>
                </a>
                
                <a href="tel:+916304633491" className="block">
                  <Button variant="outline" className="w-full text-lg py-6">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: +91 63046 33491
                  </Button>
                </a>
              </div>

              <div className="pt-6 border-t border-border space-y-3">
                <div className="flex items-center justify-center gap-2 text-sm text-foreground/70">
                  <Clock className="w-4 h-4" />
                  <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-foreground/70">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Quick Response Guaranteed</span>
                </div>
              </div>
            </Card>

            {/* Benefits */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-background/50 border border-border rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">💬</div>
                <h3 className="font-semibold mb-1">Quick Response</h3>
                <p className="text-sm text-foreground/70">Get a response within minutes</p>
              </div>
              <div className="bg-background/50 border border-border rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">📅</div>
                <h3 className="font-semibold mb-1">Flexible Timing</h3>
                <p className="text-sm text-foreground/70">Choose your convenient slot</p>
              </div>
              <div className="bg-background/50 border border-border rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">🏥</div>
                <h3 className="font-semibold mb-1">Online & In-Person</h3>
                <p className="text-sm text-foreground/70">Both options available</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BookingPage;