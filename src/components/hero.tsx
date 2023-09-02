import Image from "next/image";
import hero from '../../public/hero.png'

export function Hero() {
    return (
        <section className="bg-gradient-to-b from-[#036c5f] to-emerald-600 w-full">
            <div className="w-full max-w-7xl flex items-center gap-20 mx-auto py-24">
                <div className="max-w-3xl flex flex-col items-start gap-6">
                    <h1 className="text-4.5xl font-extrabold font-title-bold text-white">Resignificando seu trabalho com autoconhecimento</h1>

                    <p className="medium text-white max-w-xl">Consultoria Epecializada em treinamento e desenvolvimento
                        Humano por meio do autoconhecimento</p>

                    <button
                        className="px-6 py-3 rounded-full bg-tranparent border-2 border-[#F14902] hover:bg-[#F14902] text-white font-medium text-sm transition-colors duration-150">
                        Fale conosco
                    </button>
                </div>

                <Image
                    src={hero}
                    alt=""
                    quality={100}
                    className=""
                    width={500}
                    height={500}
                />
            </div>
        </section>
    )
}