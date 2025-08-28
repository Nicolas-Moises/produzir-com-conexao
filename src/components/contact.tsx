"use client";

import { Button, Input, Textarea } from "@nextui-org/react";
import star from "../../public/star.svg";
import Image from "next/image";
import toast from "react-hot-toast";
import { useState } from "react";
import { sendEmail } from "@/service/send-email";

export function Contact() {
 const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const form = new FormData();
    form.append("name", formData.name);
    form.append("phone", formData.phone);
    form.append("email", formData.email);
    form.append("message", formData.message);

    try {
      const result = await sendEmail(form);

      if (result.status !== 200) {
        toast.error(result.data?.message || "Ocorreu um erro, tente novamente.");
        return;
      }

      toast.success("Recebemos sua mensagem com sucesso!");

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error("Erro ao enviar mensagem. Tente novamente.");
    } finally {
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
            className="w-full max-w-2xl space-y-4"
            onSubmit={handleSubmit}
          >
            <Input
              type="text"
              label="Nome"
              placeholder="Insira seu nome"
              name="name"
              value={formData.name}
              onChange={handleChange}
              isRequired
            />
            <Input
              type="text"
              label="WhatsApp"
              placeholder="Insira seu número do WhatsApp"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              isRequired
            />
            <Input
              type="email"
              label="E-mail"
              placeholder="Insira seu e-mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              isRequired
            />
            <Textarea
              label="Mensagem"
              placeholder="Quais são suas dúvidas?"
              name="message"
              value={formData.message}
              onChange={handleChange}
              isRequired
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
