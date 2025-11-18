import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const TermsConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions - Dr. Prasanna Boddupally | Service Agreement</title>
        <meta name="description" content="Read the terms and conditions for using Dr. Prasanna Boddupally's homeopathy services and website." />
        <link rel="canonical" href="https://drprasanna.lovable.app/terms" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-subtle">
        <div className="container mx-auto max-w-4xl px-4 py-32">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Terms & Conditions
          </h1>
          <p className="text-sm text-foreground/70 mb-8">Last updated: December 2024</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
              <p className="text-foreground/80 leading-relaxed">
                By accessing and using the services of Dr. Prasanna Boddupally's homeopathy clinic ("the Clinic"), you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services or website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Medical Services</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Professional Relationship</h3>
              <p className="text-muted-foreground leading-relaxed">
                The doctor-patient relationship is established only after an initial consultation. Information provided on this website does not constitute medical advice and should not be used as a substitute for professional medical consultation.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">2.2 Treatment Approach</h3>
              <p className="text-muted-foreground leading-relaxed">
                Dr. Prasanna practices homeopathy according to recognized medical standards. Treatment plans are individualized based on detailed case-taking and constitutional analysis. Results may vary between individuals.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">2.3 Scope of Practice</h3>
              <p className="text-muted-foreground leading-relaxed">
                We treat a wide range of acute and chronic conditions. However, emergencies requiring immediate medical intervention should be directed to emergency services. We reserve the right to refer cases to other specialists when appropriate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Appointments</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">3.1 Booking</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Appointments must be booked in advance through our website, phone, or WhatsApp</li>
                <li>We will confirm your appointment within 2-4 hours during working hours</li>
                <li>Please arrive 10 minutes before your scheduled time</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">3.2 Cancellations and Rescheduling</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Cancellations must be made at least 24 hours in advance</li>
                <li>Late cancellations or no-shows may result in a cancellation fee</li>
                <li>We reserve the right to reschedule appointments due to unforeseen circumstances</li>
                <li>Emergency cancellations will be accommodated on a case-by-case basis</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">3.3 Late Arrivals</h3>
              <p className="text-muted-foreground leading-relaxed">
                Patients arriving more than 15 minutes late may need to reschedule their appointment to ensure quality care for all patients.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Fees and Payment</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">4.1 Consultation Fees</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Initial consultation: ₹800</li>
                <li>Follow-up consultation: ₹500</li>
                <li>Online consultation: Same as in-person</li>
                <li>Fees are subject to change with prior notice</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">4.2 Payment Terms</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Payment is due at the time of service</li>
                <li>We accept cash, UPI, cards, and online payments</li>
                <li>Receipts will be provided for all payments</li>
                <li>Medicines are charged separately based on the prescription</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">4.3 Refund Policy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Consultation fees are non-refundable once the appointment has been conducted. Refunds for cancelled appointments (with 24+ hours notice) will be processed within 7-10 business days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Patient Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Provide accurate and complete medical history</li>
                <li>Inform us of all medications and supplements you're taking</li>
                <li>Follow prescribed treatment plans and dosage instructions</li>
                <li>Attend scheduled follow-up appointments</li>
                <li>Report any adverse reactions or concerns immediately</li>
                <li>Maintain confidentiality of other patients' information</li>
                <li>Treat clinic staff with respect and courtesy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                All patient information is kept strictly confidential in accordance with medical ethics and applicable laws. Medical records are maintained securely and accessed only by authorized personnel for treatment purposes. See our Privacy Policy for detailed information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Online Consultations</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">7.1 Technical Requirements</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Stable internet connection required</li>
                <li>Video consultation platform as specified by the clinic</li>
                <li>Private, quiet environment for consultation</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">7.2 Limitations</h3>
              <p className="text-muted-foreground leading-relaxed">
                Online consultations have inherent limitations compared to in-person visits. Physical examination is not possible. Patients may be asked to visit in person if deemed necessary for proper assessment.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">8. Medical Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we strive for the best outcomes, homeopathic treatment results vary by individual. We make no guarantees regarding cure or specific timeframes. In case of emergency, contact emergency services immediately. This website's content is for informational purposes only and does not replace professional medical advice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">9. Website Usage</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">9.1 Intellectual Property</h3>
              <p className="text-muted-foreground leading-relaxed">
                All content on this website, including text, images, logos, and graphics, is the property of Dr. Prasanna Boddupally and protected by copyright laws. Unauthorized use, reproduction, or distribution is prohibited.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">9.2 User Conduct</h3>
              <p className="text-muted-foreground leading-relaxed mb-3">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Use the website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Transmit harmful code or malware</li>
                <li>Harass, abuse, or harm other users</li>
                <li>Collect information about other users without consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">10. Liability Limitation</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the maximum extent permitted by law, Dr. Prasanna Boddupally and the clinic shall not be liable for any indirect, incidental, consequential, or punitive damages arising from the use of our services or website. Our total liability shall not exceed the fees paid for the specific service giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">11. Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">12. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">13. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                For questions regarding these Terms and Conditions, please contact:
              </p>
              <div className="bg-card border border-border rounded-lg p-6 space-y-2">
                <p className="text-foreground"><strong>Dr. Prasanna Boddupally</strong></p>
                <p className="text-muted-foreground">Homeopathy Clinic</p>
                <p className="text-muted-foreground">123 Health Street, Banjara Hills</p>
                <p className="text-muted-foreground">Hyderabad, Telangana - 500034</p>
                <p className="text-muted-foreground">Phone: +91-9876543210</p>
                <p className="text-muted-foreground">Email: info@drprasanna.com</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default TermsConditions;
