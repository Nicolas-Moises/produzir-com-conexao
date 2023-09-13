'use client'
import { Button, Input } from "@nextui-org/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function Contact() {
    return (
        <section className="bg-orange-100 border-t border-black w-full rounded-b-3xl relative overflow-hidden px-4">
            <div className="w-full max-w-7xl flex flex-col items-center gap-14 mx-auto pt-20 pb-24">
                <div className="flex flex-col gap-4 lg:gap-6 items-center">
                    <h2 className="text-3xl lg:text-4.5xl font-title font-bold tracking-tight text-zinc-800 text-center">
                        Quer saber mais?<br /> Entre em contato conosco
                    </h2>
                    <p className="text-[#1C191A]/80 text-lg font-medium max-w-3xl text-center">
                        Preencha o formulário abaixo, ou acesses nossas redes para acompanhar as atualizações!
                    </p>
                </div>
                <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-20 lg:gap-20 gap-x-20 w-full mx-auto">
                    <div className="w-full max-w-md grid grid-cols-2 place-items-center">
                        <Link href='https://www.instagram.com/produzircomconexao/' target='_blank' className="flex items-center gap-1 group py-10">
                            Instagram
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-150" />
                        </Link>
                        <Link href='#' className="flex items-center gap-1 group py-10">
                            WhatsApp
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-150" />
                        </Link>
                        <Link href='https://www.linkedin.com/company/produzir-com-conex%C3%A3o' target='_blank' className="flex items-center gap-1 group py-10">
                            Linkedin
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-150" />
                        </Link>
                        <Link href='#' className="flex items-center gap-1 group py-10">
                            E-mail
                            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-150" />
                        </Link>
                    </div>
                    <form className="w-full max-w-md space-y-4">
                        <Input type="text" label="Nome" placeholder="Insira seu nome" />
                        <Input type="text" label="WhatsApp" placeholder="Insira seu número do WhatsApp" />
                        <Input type="email" label="E-mail" placeholder="Insira seu e-mail" />
                        <Button className="w-full" radius="none" color="secondary">Enviar</Button>
                    </form>
                </div>
            </div>
        </section>
    )
}