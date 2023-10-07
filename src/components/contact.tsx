'use client'

import { Button, Input, Textarea } from "@nextui-org/react"
import star from '../../public/star.svg'
import Image from "next/image"
import { sendEmails } from "@/actions/send-email"

export function Contact() {

    return (
        <section className="w-full rounded-b-3xl relative overflow-hidden px-4 bg-background-light pt-16 pb-24" id="contact">
            <div className="container flex flex-col items-center">
                <div className="flex flex-col gap-4 items-center">
                    <Image
                        src={star}
                        alt=''
                        className='w-10 h-10 mb-12'
                    />
                    <h2 className="text-5xl mb-6 lg:text-4.5xl font-title font-bold tracking-tight text-zinc-800 text-center">
                        Quer saber mais? Vamos bater um papo
                    </h2>
                    <p className="text-[#1C191A]/80 text-lg font-medium max-w-3xl text-center">
                        Preencha o formulário abaixo, ou acesses nossas redes para acompanhar as atualizações!
                    </p>
                </div>
                <div className="flex bg-primary px-4 flex-col-reverse lg:flex-row items-center justify-center gap-20 lg:gap-20 gap-x-20 w-full max-w-2xl mx-auto py-10 rounded-3xl mt-6">

                    <form
                        className="w-full max-w-2xl space-y-4"
                        action={async (formData) => {
                            await sendEmails(formData)
                        }}>
                        <Input type="text" label="Nome" placeholder="Insira seu nome" name='name' required />
                        <Input type="text" label="WhatsApp" placeholder="Insira seu número do WhatsApp" name='phone' required />
                        <Input type="email" label="E-mail" placeholder="Insira seu e-mail" name='email' required />
                        <Textarea label="Mensagem" placeholder="Quais são suas dúvidas?" name='message' required />
                        <Button
                            type="submit"
                            className="w-full bg-pink-500 text-white"
                            radius="sm"
                        >
                            Enviar
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}
