import Image from "next/image";
import aboutus from '../../public/about-us.png'
import pattern from '../../public/pattern-about.png'

export function AboutUs() {
    return (
        <section className="bg-white w-full relative">
            <div className="w-full max-w-7xl flex items-end mx-auto pt-20 pb-44 overflow-hidden">
                <Image
                    src={aboutus}
                    alt=""
                    quality={100}
                    className="max-w-xl"
                    width={1035}
                    height={1475}
                />
                <div className="flex-1 flex flex-col items-start gap-6 -ml-36 -mb-20 p-16 rounded-3xl border border-[#DA4669] bg-white shadow-xl z-20">
                    <h2 className="text-4xl font-title-bold text-zinc-800">Mas, quem somos?</h2>

                    <div>
                        <p className="medium text-zinc-600 max-w-xl">
                            Oferecemos treinamentos personalizados alinhados com a estratégia da empresa, usando experiências
                            para fortalecer as equipes.
                        </p>
                        <p className="medium text-zinc-600 max-w-xl">
                            Oferecemos treinamentos personalizados alinhados com a estratégia da empresa, usando experiências
                            para fortalecer as equipes.
                        </p>
                        <p className="medium text-zinc-600 max-w-xl">
                            Oferecemos treinamentos personalizados alinhados com a estratégia da empresa, usando experiências
                            para fortalecer as equipes.
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <button
                            className="px-6 py-3 rounded-full bg-[#DA4669] hover:bg-[#DA4669]/80 text-white font-medium text-sm transition-colors duration-150">
                            Agendar uma reunião
                        </button>
                        <button
                            className="px-6 py-3 rounded-full border border-[#2c2c2e] bg-transparent hover:opacity-80 text-2c2c2e font-medium text-sm transition-colors duration-150">
                            Sobre nós
                        </button>
                    </div>
                </div>
            </div>
            <Image
                src={pattern}
                alt=""
                className="absolute bottom-96 left-1/2  translate-x-[40%] z-10 w-60"
            />
        </section>
    )
}