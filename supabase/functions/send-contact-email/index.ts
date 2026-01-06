import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, company, message }: ContactFormRequest = await req.json();

    console.log("Received contact form submission:", { name, email, phone, company, message });

    // Send email to przyluski.business@gmail.com
    const emailResponse = await resend.emails.send({
      from: "LOBO AI <onboarding@resend.dev>",
      to: ["przyluski.business@gmail.com"],
      subject: `Nouvelle demande de diagnostic - ${company}`,
      html: `
        <h1>Nouvelle demande de diagnostic gratuit</h1>
        <h2>Informations du contact</h2>
        <ul>
          <li><strong>Nom:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Téléphone:</strong> ${phone}</li>
          <li><strong>Entreprise:</strong> ${company}</li>
        </ul>
        <h2>Message</h2>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Ce message a été envoyé depuis le formulaire de contact LOBO AI.</em></p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
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
