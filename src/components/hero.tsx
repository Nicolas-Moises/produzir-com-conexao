import Image from "next/image";
import hero from '../../public/hero.png'
import underline from '../../public/hero-underline.png'
import { Underline } from "./assets/underline";

export function Hero() {
    return (
        <section className="bg-gradient-to-b from-[#036c5f] to-emerald-600 w-full relative">
            <div className="w-full max-w-7xl flex items-start gap-20 mx-auto pt-20 pb-24">
                <div className="max-w-xl flex flex-col items-start gap-6 pt-10">
                    <h1 className="text-4.5xl font-title-bold text-white">Resignificando seu trabalho com{' '}
                        <span className="relative">
                            autoconhecimento
                        </span>
                    </h1>

                    <p className="font-medium text-white/80 text-lg">Consultoria especializada em treinamento e desenvolvimento
                        humano por meio do autoconhecimento.

                    </p>
                    <div className="flex items-center gap-4">
                        <button
                            className="px-6 py-3 rounded-full bg-[#F4B324] hover:bg-[#F4B324]/80 text-black font-medium text-sm transition-colors duration-150">
                            Agendar uma reunião
                        </button>
                        <button
                            className="px-6 py-3 rounded-full border border-white bg-transparent hover:opacity-80 text-white hover: font-medium text-sm transition-colors duration-150">
                            Alguma dúvida?
                        </button>
                    </div>
                </div>

                <Image
                    src={hero}
                    alt=""
                    quality={100}
                    className="-mb-32 ml-auto z-20 w-full max-w-xl"
                    width={500}
                    height={500}
                />
            </div>

            {/* <Image
                src={pattern}
                alt=""
                className="absolute top-0 right-0 z-10 w-60"
            /> */}
        </section>
    )
}