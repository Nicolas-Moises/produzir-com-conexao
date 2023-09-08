import Image from "next/image";
import hero from '../../public/hero.png'

import { Button } from '@nextui-org/button';
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="w-full relative skew-y-2 bg-zinc-800 z-10 px-4">
            <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-20 mx-auto -mt-10 pt-8 pb-24 -skew-y-2">
                <div className="max-w-2xl flex flex-col items-center lg:items-start gap-6 pt-10">
                    <h1 className="text-4xl lg:text-6xl text-center lg:text-left font-bold tracking-tight font-title text-zinc-50">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">Encontre sentido</span> no que você faz por meio de quem você é
                    </h1>

                    <p className="text-white/80 max-w-xl text-lg text-center lg:text-left">
                        Consultoria especializada em treinamento e desenvolvimento
                        humano por meio do autoconhecimento.
                    </p>
                    <div className="flex flex-col sm:flex-row max-w-xs sm:max-w-none sm:items-center justify-center lg:justify-normal gap-4 w-full">
                        <Button radius='none' className="bg-pink-500 text-white">
                            Agendar uma reunião
                        </Button>
                        <Button
                            radius='none'
                            className="bg-transparent group text-white "
                            endContent={<ArrowRight className="group-hover:translate-x-1 transition-transform duration-100 w-4 h-4" />}
                        >
                            Visite nosso instagram
                        </Button>
                    </div>
                </div>
                <div className="w-full max-w-xl group overflow-hidden rounded-2xl">
                    <Image
                        src={hero}
                        alt=""
                        quality={100}
                        className="ml-auto z-20 w-full object-cover hover:scale-105 transition-transform duration-150"
                        width={500}
                        height={500}
                    />

                </div>

            </div>
        </section>
    )
}