import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Dr. Prasanna Boddupally | Patient Data Protection</title>
        <meta name="description" content="Read our privacy policy to understand how we collect, use, and protect your personal and medical information at Dr. Prasanna's homeopathy clinic." />
        <link rel="canonical" href="https://drprasanna.lovable.app/privacy-policy" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-subtle">
        <div className="container mx-auto max-w-4xl px-4 py-32">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: December 2024</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Dr. Prasanna Boddupally ("we," "our," or "us") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our medical services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Personal Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Name, age, gender, and contact details</li>
                <li>Email address and phone number</li>
                <li>Appointment booking information</li>
                <li>Payment and billing information</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">2.2 Medical Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Medical history and current health conditions</li>
                <li>Symptoms, diagnoses, and treatment plans</li>
                <li>Prescriptions and medication history</li>
                <li>Laboratory and test results</li>
                <li>Family medical history</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-4">2.3 Technical Information</h3>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Website usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-3">We use the collected information for:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Providing medical consultation and treatment</li>
                <li>Managing appointments and follow-ups</li>
                <li>Processing payments and billing</li>
                <li>Sending appointment reminders and health updates</li>
                <li>Improving our services and website functionality</li>
                <li>Complying with legal and regulatory requirements</li>
                <li>Communicating important information about our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal and medical information against unauthorized access, alteration, disclosure, or destruction. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                <li>Encrypted data transmission (SSL/TLS)</li>
                <li>Secure server infrastructure</li>
                <li>Access controls and authentication</li>
                <li>Regular security audits and updates</li>
                <li>Staff training on data protection</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-3">
                <li>With your explicit consent</li>
                <li>With healthcare professionals involved in your treatment</li>
                <li>To comply with legal obligations or court orders</li>
                <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                <li>To protect our rights, property, or safety</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground mb-3">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Access your personal and medical information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your data (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
                <li>File a complaint with relevant authorities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Cookies Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device. We use both session cookies (temporary) and persistent cookies (stored long-term) for analytics, preferences, and functionality. You can control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">8. Children's Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                While we treat children as patients, our website is not directed to individuals under 18. If a parent or guardian provides information about their child for medical purposes, we protect that information with the same security measures as adult patient data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">9. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your medical records for a minimum of 7 years as required by medical regulations in India. Personal information collected through our website is retained as long as necessary for the purposes outlined in this policy or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">10. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new policy on our website with an updated "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us:
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

export default PrivacyPolicy;
