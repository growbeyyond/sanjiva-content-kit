import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.0";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get tomorrow's date
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowStr = tomorrow.toISOString().split('T')[0];

    // Fetch confirmed appointments for tomorrow
    const { data: appointments, error } = await supabase
      .from('appointments')
      .select('*')
      .eq('preferred_date', tomorrowStr)
      .eq('status', 'confirmed')
      .not('email', 'is', null);

    if (error) throw error;

    if (!appointments || appointments.length === 0) {
      return new Response(
        JSON.stringify({ message: "No appointments to remind" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send reminder emails
    const emailPromises = appointments.map(async (appointment) => {
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #16a34a;">Appointment Reminder</h2>
          <p>Dear ${appointment.name},</p>
          <p>This is a friendly reminder about your appointment tomorrow:</p>
          <div style="background-color: #f0fdf4; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Date:</strong> ${new Date(appointment.preferred_date).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
            <p><strong>Time:</strong> ${appointment.preferred_time}</p>
            <p><strong>Condition:</strong> ${appointment.condition}</p>
          </div>
          <p><strong>What to bring:</strong></p>
          <ul>
            <li>Any previous medical reports</li>
            <li>Current medications list</li>
            <li>Photo ID</li>
          </ul>
          <p>If you need to reschedule, please contact us at:</p>
          <p>📞 +91 81799 42297<br>
          📧 prasannaboddu@gmail.com</p>
          <p>We look forward to seeing you!</p>
          <p>Best regards,<br>
          <strong>Dr. Prasanna Boddupally</strong><br>
          Homeopathy Physician</p>
        </div>
      `;

      return resend.emails.send({
        from: "Dr. Prasanna <appointments@drprasanna.com>",
        to: [appointment.email],
        subject: "Reminder: Your Appointment Tomorrow",
        html: emailHtml,
      });
    });

    const results = await Promise.allSettled(emailPromises);
    const successful = results.filter(r => r.status === 'fulfilled').length;

    return new Response(
      JSON.stringify({ 
        message: `Sent ${successful} of ${appointments.length} reminder emails`,
        total: appointments.length,
        successful 
      }),
      { 
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    );

  } catch (error: any) {
    console.error("Error in send-appointment-reminder:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    );
  }
});
