'use client'
import Image from "next/image";
import stars from '../../public/shining-stars.svg'
import hero from '../../public/features-2.png'
import { Button, Link } from '@nextui-org/react'

export function Hero() {
    return (
        <section className="w-full relative z-10 bg-zinc-900" id="home">
            <div className="container flex flex-col xl:flex-row gap-8 justify-between items-center xl:items-start  mx-auto overflow-hidden py-24 px-4">
                <div className="relative max-w-2xl xl:py-0 px-6 xl:px-4 flex flex-col items-center xl:items-start ">
                    <Image className="absolute rotate-6 top-0 right-0 -z-10 w-20" alt="" src={stars} />
                    <span className="text-xs sm:text-sm font-medium text-pink-400 mt-10 mb-4">
                        Explore seu potencial
                    </span>
                    <h1 className="text-6xl mb-4 lg:text-7xl text-center xl:text-left font-bold tracking-tight font-title text-zinc-50">
                        Encontre sentido no que você faz por meio de quem você é
                    </h1>
                    <p className="mb-6 text-zinc-300 max-w-xl font-normal text-lg text-center xl:text-left">
                        Somos uma consultoria especializada em treinamento e desenvolvimento
                        humano por meio do autoconhecimento.
                    </p>
                    <div className="flex flex-col sm:flex-row max-w-xs sm:max-w-none sm:items-center justify-center xl:justify-normal gap-4 w-full">
                        <Button
                            radius='sm'
                            className="bg-pink-400 hover:opacity-80 text-white"
                            size="lg"
                            as={Link}
                            target="_blank"
                            href="https://wa.me/5511983360953">
                            Agendar uma reunião
                        </Button>
                    </div>
                </div>

                <div className="rounded-2xl overflow-hidden max-w-xl aspect-square mt-8 xl:mt-0">
                    <Image
                        src={hero}
                        alt=""
                        quality={100}
                        priority
                        className="w-full h-full rounded-2xl object-cover object-bottom transition-transform duration-150"
                        width={500}
                        height={500}
                    />
                </div>
            </div>
        </section>
    )
}