import { NextResponse } from "next/server";

const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;

type ContactFormFields = {
  name: string;
  phone: string;
  email: string;
  content: string;
};

export async function POST(req: Request) {
  try {
    const body: ContactFormFields = await req.json();

    const response = await fetch(`${NEXT_PUBLIC_API_URL}/send-mail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { message: errorData.message || "Erro ao enviar mensagem." },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.error("Erro no envio:", err);
    return NextResponse.json(
      { message: "Erro inesperado ao enviar mensagem." },
      { status: 500 }
    );
  }
}
