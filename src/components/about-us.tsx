'use client'
import Image from "next/image";
import aboutus from '../../public/features.png'
import case3 from '../../public/case-3.gif'
import preview from '../../public/photo-1.png'
import caseOne from '../../public/case-1.jpg'
import case5 from '../../public/case-5.jpeg'
import hero from '../../public/hero.png'
import case2 from '../../public/case-2.jpg'
import hearts from '../../public/hearts.svg'
import { Button, Link } from "@nextui-org/react";

export function AboutUs() {
    return (
        <section className="w-full relative z-10 py-24 bg-background-light px-4" id="about-us">
            <div className="container">
                <div className="flex flex-col-reverse xl:flex-row items-center gap-8 justify-between mx-auto overflow-hidden py-24 px-4">
                    <div className="rounded-2xl overflow-hidden w-full max-w-xl aspect-square mt-8 xl:mt-0">
                        <Image
                            src={case3}
                            alt=""
                            quality={100}
                            priority
                            className="w-full h-full rounded-2xl object-cover object-bottom transition-transform duration-150"
                            width={500}
                            height={500}
                        />
                    </div>

                    <div className="relative max-w-2xl xl:py-0 px-6 xl:px-4 flex flex-col items-center xl:items-start justify-center ">
                        <Image src={hearts} className="absolute left-0 -top-16 w-20" alt='' />
                        <h2 className="text-5xl mb-4 font-title font-bold tracking-tight text-zinc-800 text-center lg:text-7xl lg:text-left">Quem somos e nossos objetivos</h2>

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

                        <div className="flex flex-col sm:flex-row max-w-xs sm:max-w-none sm:items-center justify-center xl:justify-normal gap-4 w-full">
                            <Button
                                radius='sm'
                                className="bg-pink-400 hover:opacity-80 text-white"
                                size="lg"
                                target="_blank"
                                as={Link}
                                href="https://wa.me/5511983360953"
                            >
                                Entre em contato
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-2xl p-6 mt-10">

                    <div className="grid gap-4 auto-rows-min">
                        <Image
                            alt="gallery"
                            className="h-auto max-w-full rounded-xl"
                            src={aboutus}
                        />
                        <Image
                            className="h-auto max-w-full rounded-xl"
                            src={preview}
                            alt=""
                        />
                    </div>
                    <div className="grid gap-4">
                        <div>
                            <Image
                                className="h-auto max-w-full rounded-xl"
                                src={case5}
                                alt=""
                            />
                        </div>
                        <div className="h-min">
                            <Image
                                className="h-auto max-w-full rounded-xl"
                                src={caseOne}
                                alt=""
                            />
                        </div>
                        <div>
                            <Image
                                className="h-auto max-w-full rounded-xl"
                                src={hero}
                                alt=""
                            />
                        </div>
                        <div>
                            <Image
                                className="h-auto max-w-full rounded-xl"
                                src={case2}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}