'use client'
import Image from "next/image";
import aboutus from '../../public/features-2.png'
import { Button } from "@nextui-org/react";

export function AboutUs() {
    return (
        <section className="w-full relative bg-yellow-300 z-10 border-t border-black">
            <div className="w-full grid lg:grid-cols-2 center overflow-hidden">
                <div className="w-full ml-auto hidden lg:block group overflow-hidden border-tl-3xl">
                    <Image
                        src={aboutus}
                        alt=""
                        quality={100}
                        className="w-full object-cover hover:scale-105 transition-transform duration-150"
                        width={500}
                        height={500}
                    />

                </div>
                <div className="max-w-2xl relative mx-auto py-24 px-6 lg:px-4 lg:py-0 flex flex-col items-center lg:items-start justify-center gap-6">
                    <h2 className="text-5xl z-20 font-title font-bold tracking-tight text-black text-center lg:text-left">Mas, quem somos?</h2>

                    <div className="space-y-3 text-center lg:text-left z-20">
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

                    <Button radius='none' className="bg-pink-500 text-white">
                        Agendar uma reunião
                    </Button>
                </div>
                <div className="w-full ml-auto lg:hidden group overflow-hidden border-tl-3xl">
                    <Image
                        src={aboutus}
                        alt=""
                        quality={100}
                        className="w-full object-cover hover:scale-105 transition-transform duration-150"
                        width={500}
                        height={500}
                    />

                </div>


            </div>
        </section>
    )
}