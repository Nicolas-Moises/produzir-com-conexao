"use server";

import ContactFormEmail from "@/emails/contact-form-email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactFormFields = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export async function sendEmails(formData: FormData) {
  const fields: ContactFormFields = {
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    email: formData.get("email") as string,
    message: formData.get("message") as string,
  };

  // validação simples
  for (const [key, value] of Object.entries(fields)) {
    if (!value || typeof value !== "string") {
      return { error: `Campo inválido: ${key}` };
    }
  }

  try {
    const data = await resend.emails.send({
      from: "Contato Website <onboarding@resend.dev>",
      to: "produzircomconexao@gmail.com",
      subject: "Contato de interesse Website",
      react: ContactFormEmail(fields),
      replyTo: fields.email,
    });

    console.log(data)

    if (data.error) {
      return { error: data.error.message ?? "Erro ao enviar e-mail" };
    }

    return { success: true };
  } catch (err) {
    console.error("Erro ao enviar e-mail:", err);
    return { error: "Erro interno ao enviar e-mail" };
  }
}
