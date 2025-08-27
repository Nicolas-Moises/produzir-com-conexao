"use client";

import { Button, Input, Textarea } from "@nextui-org/react";
import star from "../../public/star.svg";
import Image from "next/image";
import { sendEmails } from "@/actions/send-email";
import toast from "react-hot-toast";
import { useState, useRef } from "react";

export function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    
    const { success, error } = await sendEmails(formData);

    if (error) {
      toast.error(error);
      setIsLoading(false);
      return;
    }

    if (success) {
      toast.success("Recebemos sua mensagem com sucesso!");
      formRef.current?.reset();
      setIsLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="w-full rounded-b-3xl relative overflow-hidden px-4 bg-background-light pt-16 pb-24"
    >
      <div className="container flex flex-col items-center">
        <div className="flex flex-col gap-4 items-center">
          <Image src={star} alt="" className="w-10 h-10 mb-12" />
          <h2 className="text-5xl mb-6 lg:text-4.5xl font-title font-bold tracking-tight text-zinc-800 text-center">
            Quer saber mais? Vamos bater um papo
          </h2>
          <p className="text-[#1C191A]/80 text-lg font-medium max-w-3xl text-center">
            Preencha o formulário abaixo, ou acesse nossas redes para acompanhar
            as atualizações!
          </p>
        </div>

        <div className="flex bg-primary px-4 flex-col-reverse lg:flex-row items-center justify-center gap-20 w-full max-w-2xl mx-auto py-10 rounded-3xl mt-6">
          <form
            ref={formRef}
            action={handleSubmit}
            className="w-full max-w-2xl space-y-4"
          >
            <Input
              type="text"
              label="Nome"
              placeholder="Insira seu nome"
              name="name"
              required
            />
            <Input
              type="text"
              label="WhatsApp"
              placeholder="Insira seu número do WhatsApp"
              name="phone"
              required
            />
            <Input
              type="email"
              label="E-mail"
              placeholder="Insira seu e-mail"
              name="email"
              required
            />
            <Textarea
              label="Mensagem"
              placeholder="Quais são suas dúvidas?"
              name="message"
              required
            />
            <Button
              type="submit"
              className="w-full bg-pink-500 text-white"
              radius="sm"
              isLoading={isLoading}
            >
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
