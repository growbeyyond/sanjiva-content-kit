import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TopBanner from "@/components/TopBanner";
import { Helmet } from "react-helmet-async";
import { AlertTriangle } from "lucide-react";

const Disclaimer = () => {
  return (
    <>
      <TopBanner />
      <Helmet>
        <title>Medical Disclaimer - Dr. Prasanna Boddupally | Important Information</title>
        <meta name="description" content="Important medical disclaimer and information about homeopathy services provided by Dr. Prasanna Boddupally." />
        <link rel="canonical" href="https://drprasanna.lovable.app/disclaimer" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-subtle">
        <div className="container mx-auto max-w-4xl px-4 py-32">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="w-10 h-10 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Medical Disclaimer
            </h1>
          </div>
          <p className="text-sm text-muted-foreground mb-8">Last updated: December 2024</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">Important Notice</h2>
              <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg">
                <p className="text-foreground font-semibold leading-relaxed">
                  The information provided on this website and during consultations is for educational and informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. General Medical Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                The content on this website, including articles, blog posts, treatment descriptions, and testimonials, is provided for general informational purposes. This information should not be used for self-diagnosis or self-treatment of any health condition.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                <strong>Always seek the advice of qualified healthcare professionals</strong> regarding any medical condition, health concern, or treatment option. Never disregard professional medical advice or delay seeking it because of information you read on this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Homeopathy Practice</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">2.1 About Homeopathy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Homeopathy is a recognized system of medicine in India and many other countries. Dr. Prasanna Boddupally is a qualified homeopathic physician practicing according to the principles of classical homeopathy and regulations set by the Central Council of Homoeopathy (CCH), Government of India.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">2.2 Treatment Outcomes</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Results from homeopathic treatment vary from person to person</li>
                <li>Treatment duration depends on the nature and severity of the condition</li>
                <li>Individual responses to remedies differ based on constitutional factors</li>
                <li>No guarantees of cure or specific timeframes can be made</li>
                <li>Some conditions may require longer treatment periods than others</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">2.3 Scope of Practice</h3>
              <p className="text-muted-foreground leading-relaxed">
                Homeopathy can be effective for many acute and chronic conditions. However, it has limitations like any medical system. Certain emergencies, surgical conditions, and advanced pathologies require conventional medical intervention. We will recommend appropriate referrals when necessary.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Doctor-Patient Relationship</h2>
              <p className="text-muted-foreground leading-relaxed">
                The doctor-patient relationship is established only through a formal consultation (in-person or online). Simply visiting this website, reading content, or sending inquiries does not create a doctor-patient relationship.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Medical advice is given only after thorough case-taking and analysis. Information provided before a consultation is general in nature and should not be construed as personal medical advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Testimonials and Case Studies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Testimonials and case studies shared on this website represent individual experiences and outcomes. They do not guarantee similar results for other patients. Each person's health condition is unique, and treatment outcomes depend on multiple factors including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                <li>Individual constitution and health status</li>
                <li>Severity and duration of the condition</li>
                <li>Compliance with treatment recommendations</li>
                <li>Lifestyle factors and stress levels</li>
                <li>Concurrent medications or treatments</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Emergency Situations</h2>
              <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-lg">
                <p className="text-foreground font-semibold mb-3">⚠️ In Case of Emergency:</p>
                <p className="text-muted-foreground leading-relaxed">
                  If you are experiencing a medical emergency such as chest pain, difficulty breathing, severe bleeding, loss of consciousness, or any life-threatening condition, <strong>call emergency services immediately (112 or 108 in India)</strong> or go to the nearest emergency room. Do not rely on website information or wait for a consultation.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Medication and Treatment Safety</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">6.1 Prescribed Medications</h3>
              <p className="text-muted-foreground leading-relaxed">
                Homeopathic medicines prescribed by Dr. Prasanna are generally safe with no known toxic side effects when taken as directed. However, you must:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                <li>Follow dosage instructions carefully</li>
                <li>Inform us of all medications you're currently taking</li>
                <li>Report any unusual reactions immediately</li>
                <li>Not self-medicate or alter prescribed dosages</li>
                <li>Store medicines properly as instructed</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">6.2 Interactions with Other Treatments</h3>
              <p className="text-muted-foreground leading-relaxed">
                Homeopathy can generally be used alongside conventional medicine. However, it's essential to inform all your healthcare providers about all treatments you're receiving. Do not stop any prescribed medications without consulting the prescribing physician.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">6.3 Pregnancy and Nursing</h3>
              <p className="text-muted-foreground leading-relaxed">
                If you are pregnant, planning pregnancy, or nursing, please inform us before starting treatment. While homeopathic medicines are generally safe, certain precautions may be necessary.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Website Content Accuracy</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we strive to provide accurate, up-to-date information, medical knowledge evolves continuously. We make no warranties regarding the completeness, accuracy, or timeliness of website content. Information may be updated without notice.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                External links to other websites are provided for convenience only. We do not endorse or take responsibility for the content of linked sites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">8. Online Consultations</h2>
              <p className="text-muted-foreground leading-relaxed">
                Online consultations have inherent limitations compared to in-person visits:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                <li>Physical examination is not possible</li>
                <li>Technical issues may affect communication quality</li>
                <li>Privacy may be compromised if not in a secure environment</li>
                <li>Emergency situations cannot be handled virtually</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                We may request an in-person visit if deemed necessary for proper assessment and treatment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">9. No Professional Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Use of this website and reliance on any information provided is solely at your own risk. To the maximum extent permitted by law, Dr. Prasanna Boddupally and associated entities disclaim all liability for any loss or damage arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                <li>Reliance on website information without professional consultation</li>
                <li>Technical issues affecting online consultations</li>
                <li>Errors or omissions in website content</li>
                <li>Unauthorized access to patient information due to internet vulnerabilities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">10. Children and Minors</h2>
              <p className="text-muted-foreground leading-relaxed">
                Treatment of minors (under 18 years) requires consent from a parent or legal guardian. The consenting adult is responsible for providing accurate medical history and ensuring compliance with treatment recommendations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">11. Mental Health Conditions</h2>
              <p className="text-muted-foreground leading-relaxed">
                While homeopathy can address mental and emotional health concerns, severe psychiatric conditions may require specialized psychiatric care. If you are experiencing suicidal thoughts, severe depression, or psychotic symptoms, please seek immediate help from mental health crisis services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">12. Changes to Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                This disclaimer may be updated periodically to reflect changes in practice, regulations, or legal requirements. Continued use of our services constitutes acceptance of the current disclaimer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">13. Acknowledgment</h2>
              <div className="bg-card border-2 border-primary rounded-lg p-6">
                <p className="text-foreground leading-relaxed">
                  By using this website and our services, you acknowledge that you have read, understood, and agree to this medical disclaimer. You understand that the information provided does not replace professional medical advice and that you should consult qualified healthcare professionals for any health concerns.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">14. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                For questions about this disclaimer or our medical services:
              </p>
              <div className="bg-card border border-border rounded-lg p-6 space-y-2">
                <p className="text-foreground"><strong>Dr. Prasanna Boddupally</strong></p>
                <p className="text-muted-foreground">Registered Homeopathic Physician</p>
                <p className="text-muted-foreground">Hyderabad, Telangana, India</p>
                <p className="text-muted-foreground">Phone: +91 81799 42297</p>
                <p className="text-muted-foreground">Email: prasannaboddu@gmail.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Disclaimer;
