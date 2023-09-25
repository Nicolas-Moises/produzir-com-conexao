import Image from "next/image";
import hero from '../../public/hero.png'
import preview from '../../public/photo-1.png'
import caseOne from '../../public/training.png'
import { Button } from '@nextui-org/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
    return (
        <section className="w-full relative bg-zinc-900 z-10" id="home">
            <div className="container flex flex-col lg:flex-row items-center gap-8  mx-auto overflow-hidden py-24 px-4">
                <div className="max-w-2xl lg:py-0 px-6 mx-auto lg:px-4 flex flex-col items-center lg:items-start justify-center">
                    <span className="text-xs xs:text-sm font-semibold text-zinc-400 mt-10 py-1 px-2 rounded-full border border-zinc-700 bg-orange-500/10 mb-4">
                        +10 times impactados positivamente
                    </span>
                    <h1 className="text-5xl text-center lg:text-left font-bold tracking-tight font-title text-zinc-50">
                        Encontre sentido no que você faz por meio de quem você é
                    </h1>
                    <div className="w-full max-w-lg h-px bg-zinc-800 my-4" />
                    <p className="mb-6 text-white/80 max-w-xl font-normal text-lg text-center lg:text-left">
                        Somos uma consultoria especializada em treinamento e desenvolvimento
                        humano por meio do autoconhecimento.
                    </p>
                    <div className="flex flex-col sm:flex-row max-w-xs sm:max-w-none sm:items-center justify-center lg:justify-normal gap-4 w-full">
                        <Button radius='sm' className="bg-pink-500 hover:opacity-80 text-white">
                            Agendar uma reunião
                        </Button>
                        <Button
                            radius='sm'
                            className="bg-transparent group text-white "
                            endContent={<ArrowRight className="group-hover:translate-x-1 transition-transform duration-100 w-4 h-4" />}
                        >
                            Visite nosso instagram
                        </Button>
                    </div>
                </div>
                <div className="h-[600px] grid grid-cols-12 gap-3">
                    <div className="lg:col-span-7 col-span-12 row-span-2 overflow-hidden rounded-xl">
                        <Image
                            src={hero}
                            alt=""
                            quality={100}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-150"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="row-start-3 lg:col-span-7 col-span-12 overflow-hidden rounded-xl">
                        <Image
                            src={caseOne}
                            alt=""
                            quality={100}
                            className="w-full h-full object-cover object-right hover:scale-[1.02] transition-transform duration-150"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="col-span-5 col-start-8 row-span-3 overflow-hidden rounded-xl hidden lg:inline-flex">
                        <Image
                            src={preview}
                            alt=""
                            quality={100}
                            className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-150"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}