'use client'
import Image from "next/image";
import aboutus from '../../public/features.png'
import caseOne from '../../public/case-1.jpg'
import caseTwo from '../../public/features-2.png'
import { Button } from "@nextui-org/react";

export function AboutUs() {
    return (
        <section className="w-full relative z-10 py-24 bg-background-light px-4" id="about-us">
            <div className="container flex flex-col-reverse lg:flex-row items-center gap-10 overflow-hidden bg-primary p-6 rounded-3xl">

                <div className="h-[600px] grid grid-cols-12 gap-3">
                    <div className="lg:col-span-7 lg:col-start-6 row-span-2 col-span-12 overflow-hidden rounded-xl">
                        <Image
                            src={caseTwo}
                            alt=""
                            quality={100}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-150"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="row-start-3 lg:col-start-6 lg:col-span-7 overflow-hidden col-span-12 rounded-xl">
                        <Image
                            src={caseOne}
                            alt=""
                            quality={100}
                            className="w-full h-full object-cover object-right hover:scale-[1.02] transition-transform duration-150"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="col-span-5 row-start-1 row-span-3 overflow-hidden rounded-xl hidden lg:inline-flex">
                        <Image
                            src={aboutus}
                            alt=""
                            quality={100}
                            className="w-full h-full object-cover object-center hover:scale-[1.02] transition-transform duration-150"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
                <div className="max-w-2xl relative mx-auto pt-10 px-6 lg:px-4 lg:py-0 flex flex-col items-center lg:items-start justify-center">
                    <h2 className="text-5xl mb-4 font-title font-bold tracking-tight text-zinc-800 text-center lg:text-left">Quem somos e nossos objetivos</h2>

                    <div className="space-y-3 text-center lg:text-left z-20 mb-6">
                        <p className="medium text-zinc-800 max-w-3xl">
                            Oferecemos treinamentos personalizados alinhados com a estratégia da empresa, usando experiências
                            para fortalecer as equipes.
                        </p>
                        <p className="medium text-zinc-800 max-w-3xl">
                            Somos especializados em desenvolvimento humano, com foco em comportamento e habilidades interpessoais.
                        </p>
                        <p className="medium text-zinc-800 max-w-3xl">
                            Acreditamos que o trabalho não é apenas nossas tarefas, mas também como nos sentimos e nos destacamos. Nossas
                            ações moldam o sucesso e pessoas mais felizes, são mais produtivas.
                        </p>
                    </div>

                    <Button radius='sm' className="bg-pink-500 hover:opacity-80 text-white">
                        Agendar uma reunião
                    </Button>
                </div>
            </div>
        </section>
    )
}