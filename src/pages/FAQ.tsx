import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

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
          a: "Homeopathy has been practiced for over 200 years and is recognized by the WHO. While research continues, millions worldwide have experienced positive results. It's regulated in many countries including India, where it's an official system of medicine."
        },
        {
          q: "How is Homeopathy different from conventional medicine?",
          a: "Homeopathy treats the person holistically, not just the disease. It's gentle, non-toxic, and works by stimulating the body's natural healing mechanisms. Conventional medicine often suppresses symptoms, while homeopathy addresses root causes."
        },
        {
          q: "Can Homeopathy treat chronic diseases?",
          a: "Yes, homeopathy is particularly effective for chronic conditions like allergies, asthma, skin conditions, digestive disorders, arthritis, and hormonal imbalances. Treatment addresses the underlying constitution for lasting results."
        }
      ]
    },
    {
      category: "Treatment Process",
      questions: [
        {
          q: "How long does homeopathic treatment take?",
          a: "Acute conditions may show improvement within hours to days. Chronic conditions typically require 3-6 months for significant improvement, though this varies based on condition severity and individual response. Long-standing issues may need extended treatment."
        },
        {
          q: "Are there any side effects?",
          a: "Homeopathic medicines are extremely safe with no toxic side effects. Occasionally, a temporary mild aggravation of symptoms may occur as the body begins healing, which is actually a positive sign of remedy action."
        },
        {
          q: "Can I take homeopathy with other medications?",
          a: "Yes, homeopathic medicines can be taken alongside conventional medications. They don't interfere with other treatments. However, always inform your homeopath about all medications you're taking for optimal treatment planning."
        },
        {
          q: "What is the Sanjiva Protocol?",
          a: "The Sanjiva Protocol is Dr. Prasanna's specialized approach combining classical homeopathy with constitutional analysis. It involves detailed case-taking, individualized remedy selection, and systematic follow-ups for comprehensive healing."
        }
      ]
    },
    {
      category: "Consultation & Appointments",
      questions: [
        {
          q: "What happens during the first consultation?",
          a: "The initial consultation takes 45-60 minutes. Dr. Prasanna conducts a detailed case history covering physical symptoms, mental-emotional state, lifestyle, and family history. This helps identify your constitutional remedy for personalized treatment."
        },
        {
          q: "Do you offer online consultations?",
          a: "Yes, we provide online video consultations for patients who cannot visit in person. The quality of homeopathic treatment remains the same whether in-person or online, as diagnosis is based on detailed case history."
        },
        {
          q: "How often are follow-up appointments needed?",
          a: "Follow-ups are typically scheduled every 4-6 weeks initially, then extended to 2-3 months as improvement progresses. Frequency depends on your condition and response to treatment. Emergency consultations are available when needed."
        },
        {
          q: "What should I bring to my appointment?",
          a: "Please bring any recent medical reports, previous prescriptions, and a list of current medications. It's helpful to note down your symptoms, their patterns, and what makes them better or worse."
        }
      ]
    },
    {
      category: "Pricing & Policies",
      questions: [
        {
          q: "How do I schedule a consultation?",
          a: "You can book through our website contact form, call us, or WhatsApp us. We typically respond within 2-4 hours during working hours and will confirm your appointment slot. Consultation fees will be discussed during booking."
        },
        {
          q: "Do you accept insurance?",
          a: "We provide detailed receipts and medical documentation that you can submit to your insurance provider for reimbursement. Check with your insurance company regarding homeopathy coverage under your policy."
        },
        {
          q: "What is your cancellation policy?",
          a: "Please inform us at least 24 hours in advance if you need to reschedule or cancel. This allows us to offer the slot to another patient. Emergency cancellations are understood and accommodated."
        },
        {
          q: "How do I book an appointment?",
          a: "You can book through our website contact form, call us at +91-9876543210, or WhatsApp us. We typically respond within 2-4 hours during working hours and will confirm your appointment slot."
        }
      ]
    },
    {
      category: "Conditions Treated",
      questions: [
        {
          q: "What conditions do you treat?",
          a: "We treat a wide range of acute and chronic conditions including respiratory disorders, skin diseases, digestive issues, women's health problems, mental health conditions, pediatric ailments, and lifestyle diseases. Contact us for specific conditions."
        },
        {
          q: "Can children take homeopathic medicine?",
          a: "Absolutely! Homeopathy is extremely safe for children of all ages, including infants. Sweet-tasting medicines are easy to administer. We successfully treat childhood ailments, developmental issues, and behavioral problems."
        },
        {
          q: "Is homeopathy effective for mental health?",
          a: "Yes, homeopathy treats anxiety, depression, stress, insomnia, and other mental-emotional conditions effectively. We address both the psychological symptoms and underlying constitutional factors for comprehensive healing."
        },
        {
          q: "Can homeopathy help with skin conditions?",
          a: "Homeopathy is highly effective for skin conditions like eczema, psoriasis, acne, vitiligo, and allergic rashes. Treatment addresses internal imbalances rather than just suppressing external symptoms for lasting results."
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions - Dr. Prasanna Boddupally | Homeopathy FAQs</title>
        <meta name="description" content="Get answers to common questions about homeopathy treatment, consultation process, pricing, and conditions treated by Dr. Prasanna Boddupally in Hyderabad." />
        <meta name="keywords" content="homeopathy faq, homeopathy questions, homeopathy answers, treatment process, consultation fees, Hyderabad" />
        <link rel="canonical" href="https://drprasanna.lovable.app/faq" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-subtle">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-foreground/70">
              Everything you need to know about homeopathy and our treatment approach
            </p>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="pb-20 px-4">
          <div className="container mx-auto max-w-4xl space-y-12">
            {faqs.map((category, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
                  <div className="h-1 w-8 bg-gradient-hero rounded-full" />
                  {category.category}
                </h2>
                
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, qIdx) => (
                    <AccordionItem 
                      key={qIdx} 
                      value={`${idx}-${qIdx}`}
                      className="bg-card border border-border rounded-lg px-6 shadow-soft"
                    >
                      <AccordionTrigger className="text-left font-semibold hover:text-primary">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-foreground/70 leading-relaxed">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-20 px-4">
          <div className="container mx-auto max-w-2xl">
            <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center text-white shadow-glow">
              <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-lg mb-6 opacity-90">
                Can't find the answer you're looking for? Feel free to reach out to us directly.
              </p>
              <Button asChild size="lg" variant="secondary">
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default FAQ;
