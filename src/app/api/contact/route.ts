import { NextResponse } from "next/server";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const subject = body.subject?.trim() || "";
    const message = body.message?.trim() || "";

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { ok: false, error: "Por favor, preencha todos os campos obrigatórios." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Informe um endereço de e-mail válido." },
        { status: 400 }
      );
    }

    // 1. Server-side delivery via Resend API (when RESEND_API_KEY is configured)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfólio Antônio Junior <onboarding@resend.dev>",
          to: [PERSONAL_INFO.email],
          reply_to: email,
          subject: `[Portfólio] ${subject} — ${name}`,
          text: `Nome: ${name}\nE-mail: ${email}\nAssunto: ${subject}\n\nMensagem:\n${message}`,
        }),
      });

      if (resendResponse.ok) {
        return NextResponse.json({ ok: true, delivery: "resend" });
      }
    }

    // 2. Server-side delivery via Formspree / Webhook (when FORMSPREE_ENDPOINT is configured)
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
    if (formspreeEndpoint) {
      const formspreeResponse = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (formspreeResponse.ok) {
        return NextResponse.json({ ok: true, delivery: "formspree" });
      }
    }

    // 3. Guaranteed fallback: build pre-filled mailto URI so no message is ever lost
    const mailtoSubject = encodeURIComponent(`[Portfólio] ${subject}`);
    const mailtoBody = encodeURIComponent(
      `Olá Antônio,\n\n${message}\n\n---\nEnviado por: ${name}\nE-mail para retorno: ${email}`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    return NextResponse.json({
      ok: true,
      delivery: "mailto",
      mailtoUrl,
    });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Não foi possível processar o envio. Tente novamente ou use o WhatsApp." },
      { status: 500 }
    );
  }
}
