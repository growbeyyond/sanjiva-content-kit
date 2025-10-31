import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface AppointmentEmailRequest {
  name: string;
  phone: string;
  email?: string;
  condition: string;
  preferred_date?: string;
  preferred_time?: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Appointment email function invoked");

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const appointmentData: AppointmentEmailRequest = await req.json();
    console.log("Received appointment data:", appointmentData);

    const { name, phone, email, condition, preferred_date, preferred_time, message } = appointmentData;

    // Send notification to doctor
    const doctorEmailResponse = await resend.emails.send({
      from: "Sanjiva Protocol <onboarding@resend.dev>",
      to: ["prasannaboddu@gmail.com"],
      subject: `New Appointment Request - ${condition}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16a34a;">New Appointment Request</h2>
          <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Patient Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
            <p><strong>Condition/Concern:</strong> ${condition}</p>
            ${preferred_date ? `<p><strong>Preferred Date:</strong> ${preferred_date}</p>` : ''}
            ${preferred_time ? `<p><strong>Preferred Time:</strong> ${preferred_time}</p>` : ''}
            ${message ? `<p><strong>Message:</strong><br/>${message}</p>` : ''}
          </div>
          <p style="color: #6b7280; font-size: 14px;">
            Please contact the patient at the earliest to confirm the appointment.
          </p>
        </div>
      `,
    });

    console.log("Doctor notification sent:", doctorEmailResponse);

    // Send confirmation to patient if email provided
    if (email) {
      const patientEmailResponse = await resend.emails.send({
        from: "Dr. Prasanna - Sanjiva Protocol <onboarding@resend.dev>",
        to: [email],
        subject: "Appointment Request Received - Sanjiva Protocol",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #16a34a;">Thank you for choosing Sanjiva Protocol!</h2>
            <p>Dear ${name},</p>
            <p>We have received your appointment request for <strong>${condition}</strong>.</p>
            <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0;"><strong>What happens next?</strong></p>
              <ul style="color: #374151;">
                <li>Our team will contact you within 24 hours</li>
                <li>We'll confirm your appointment date and time</li>
                <li>You'll receive detailed instructions for your consultation</li>
              </ul>
            </div>
            <p><strong>Contact Us:</strong></p>
            <p>
              Phone: <a href="tel:+918179942297" style="color: #16a34a;">+91 81799 42297</a><br/>
              WhatsApp: <a href="https://wa.me/918179942297" style="color: #16a34a;">Click to chat</a>
            </p>
            <p style="color: #6b7280; font-size: 14px; margin-top: 30px;">
              Best regards,<br/>
              Dr. Prasanna Boddupally<br/>
              Sanjiva Protocol - Homeopathy Clinic
            </p>
          </div>
        `,
      });

      console.log("Patient confirmation sent:", patientEmailResponse);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-appointment-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
