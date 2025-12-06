import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TopBanner from "@/components/TopBanner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";

const FAQ = () => {
  const faqs = [
    {
      category: "About Homeopathy",
      questions: [
        {
          q: "What is Homeopathy?",
          a: "Homeopathy is a holistic system of medicine that treats the individual as a whole, focusing on the underlying cause rather than just symptoms. It uses highly diluted natural substances to stimulate the body's own healing response."
        },
        {
          q: "Is Homeopathy scientifically proven?",
          a: "Homeopathy has been practiced for over 200 years and is recognized by the WHO. While research continues, millions worldwide have experienced positive results. It's regulated in many countries including India."
        },
        {
          q: "Can Homeopathy treat chronic diseases?",
          a: "Yes, homeopathy is particularly effective for chronic conditions like allergies, asthma, skin conditions, digestive disorders, arthritis, and hormonal imbalances."
        }
      ]
    },
    {
      category: "Treatment Process",
      questions: [
        {
          q: "How long does homeopathic treatment take?",
          a: "Acute conditions may show improvement within hours to days. Chronic conditions typically require 3-6 months for significant improvement."
        },
        {
          q: "Are there any side effects?",
          a: "Homeopathic medicines are extremely safe with no toxic side effects. Occasionally, a temporary mild aggravation may occur, which is a positive sign."
        },
        {
          q: "Can I take homeopathy with other medications?",
          a: "Yes, homeopathic medicines can be taken alongside conventional medications. They don't interfere with other treatments."
        }
      ]
    },
    {
      category: "Consultations",
      questions: [
        {
          q: "What happens during the first consultation?",
          a: "The initial consultation takes 30-45 minutes. Dr. Prasanna conducts a detailed case history covering physical symptoms, mental-emotional state, and lifestyle."
        },
        {
          q: "Do you offer online consultations?",
          a: "Yes, we provide online video consultations for patients who cannot visit in person. The quality of treatment remains the same."
        },
        {
          q: "How often are follow-ups needed?",
          a: "Follow-ups are typically every 4-6 weeks initially, then extended to 2-3 months as improvement progresses."
        }
      ]
    },
    {
      category: "Conditions Treated",
      questions: [
        {
          q: "What conditions do you specialize in?",
          a: "Dr. Prasanna specializes in women's hormonal health including thyroid disorders, PCOS/PCOD, infertility, menstrual problems, and weight management."
        },
        {
          q: "Can children take homeopathic medicine?",
          a: "Absolutely! Homeopathy is extremely safe for children of all ages, including infants."
        },
        {
          q: "Is homeopathy effective for mental health?",
          a: "Yes, homeopathy treats anxiety, depression, stress, and insomnia effectively by addressing both psychological symptoms and underlying factors."
        }
      ]
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.flatMap(category => 
      category.questions.map(q => ({
        "@type": "Question",
        "name": q.q,
        "acceptedAnswer": { "@type": "Answer", "text": q.a }
      }))
    )
  };

  return (
    <>
      <TopBanner />
      <SEO
        title="Frequently Asked Questions | Dr. Prasanna Boddupally - Homeopathy"
        description="Get answers to common questions about homeopathy treatment, consultation process, and conditions treated by Dr. Prasanna Boddupally."
        keywords="homeopathy FAQ, homeopathy questions, thyroid treatment FAQ, PCOS questions"
        canonicalUrl="https://drprasannaboddupally.in/faq"
        structuredData={structuredData}
      />

      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-16 md:py-20 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-hero bg-clip-text text-transparent">Frequently Asked Questions</span>
              </h1>
              <p className="text-lg text-foreground/80">
                Everything you need to know about homeopathy and our treatment approach
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-12 md:py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl space-y-10">
            {faqs.map((category, idx) => (
              <div key={idx}>
                <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <div className="h-1 w-6 bg-gradient-hero rounded-full" />
                  {category.category}
                </h2>
                
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, qIdx) => (
                    <AccordionItem 
                      key={qIdx} 
                      value={`${idx}-${qIdx}`}
                      className="bg-card border border-border rounded-lg px-5"
                    >
                      <AccordionTrigger className="text-left font-medium hover:text-primary text-sm">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/80 text-sm leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg opacity-90 mb-6 max-w-xl mx-auto">
              Can't find the answer you're looking for? Feel free to reach out directly.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Contact Us <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default FAQ;
