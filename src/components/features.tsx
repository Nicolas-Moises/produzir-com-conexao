import Image from "next/image";
import { UsersGroup } from "./assets/users-group";
import { GraduationCap, Sparkles, TrendingUp, Wand2, Zap } from 'lucide-react'
import pattern from '../../public/pattern-about.png'
import patternFeatures from '../../public/pattern-features.png'
import features from '../../public/features.png'

const solutions = [
    {
        id: 1,
        title: 'Transformações Culturais',
        icon: UsersGroup
    },
    {
        id: 2,
        title: 'Desenvolvimento de habilidades',
        icon: Sparkles
    },
    {
        id: 4,
        title: 'Liderança',
        icon: Zap
    },
    {
        id: 3,
        title: 'Aprendizagem Presencial e virtual',
        icon: GraduationCap
    },
    {
        id: 5,
        title: 'Diagnóstico e consultoria',
        icon: TrendingUp
    },
    {
        id: 6,
        title: 'Fortalecimento de equipe',
        icon: Wand2
    },
]

export function Features() {
    return (
        <section className="bg-[#1C191A] w-full rounded-b-3xl -mt-10 relative overflow-hidden">
            <div className="flex overflow-hidden max-w-[calc(100vw-((100vw-1280px)/2))] ml-auto">
                <div className="w-full flex flex-col items-start gap-14 pt-20">
                    <div className="flex flex-col gap-6 items-start">
                        <h2 className="text-[3rem] font-title-bold text-white text-center">Mentoria personificada</h2>
                        <p className="text-white/80 text-lg font-medium max-w-3xl text-left">
                            Com atuação no setor de joalheria, saúde, bem estar e educacional, oferecemos programas personalizados para desenvolver talentos e alcançar
                            resultados, de acordo com as necessidades dos clientes.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-1">

                        {solutions.map((item, i) => {
                            return (
                                <div className={`px-6 py-4 z-20 bg-white/10  transition-colors 
                                    duration-200 group rounded-2xl relative flex flex-col items-center gap-3 cursor-pointer ${i % 3 === 0 && 'hover:bg-[#DA4669]'}
                                    ${i % 3 === 1 && 'hover:bg-[#F6DC04]'} ${i % 3 === 2 && 'hover:bg-[#F14902]'}`}
                                    key={item.id}
                                >
                                    <div className="flex items-center justify-center h-16 w-16 rounded-full ">
                                        <item.icon className="stroke-1 w-10 h-10 text-[#E6B2A9] group-hover:text-[#1C191A]" />
                                    </div>

                                    <strong className="text-white text-center group-hover:text-[#1C191A] text-lg">{item.title}</strong>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <Image
                    src={features}
                    className="poligon w-1/2 h-full object-cover max-h-[800px]"
                    alt=""
                />
            </div>
            <div className="w-[500px] absolute -right-64 -top-64">
                <Image
                    src={patternFeatures}
                    quality={100}
                    className="w-full object-cover"
                    alt=""
                />
            </div>
        </section>
    )
}

{/* <div className="w-full max-w-7xl flex flex-col items-center gap-14 mx-auto pt-20 pb-24">
    <div className="flex flex-col gap-6 items-center">
        <h2 className="text-4.5xl font-title-bold text-white text-center">Mentoria personificada</h2>
        <p className="text-white/80 text-lg font-medium max-w-3xl text-center">
            Com atuação no setor de joalheria, saúde, bem estar e educacional, oferecemos programas personalizados para desenvolver talentos e alcançar
            resultados, de acordo com as necessidades dos clientes.
        </p>
    </div>

    <div className="grid grid-cols-3 mx-auto gap-1">

        {solutions.map(item => {
            return (
                <div className="py-12 px-8 z-20 bg-white/10  transition-colors hover:bg-[#E6B2A9]
                duration-200 group rounded-2xl relative flex flex-col items-center gap-3 cursor-pointer" key={item.id}>
                    <div className="flex items-center justify-center h-16 w-16 rounded-full ">
                        <item.icon className="stroke-1 w-10 h-10 text-[#E6B2A9] group-hover:text-[#1C191A]" />
                    </div>

                    <strong className="text-white text-center group-hover:text-[#1C191A] text-2xl">{item.title}</strong>
                </div>
            )
        })}
    </div>
</div>
<div className="w-[500px] absolute -right-64 -top-64">

    <Image
        src={pattern}
        quality={100}
        className="w-full object-cover"
        alt=""
    />
</div>
<div className="w-[500px] absolute -left-64 -top-64">
    <Image
        src={patternFeatures}
        quality={100}
        className="w-full object-cover"
        alt=""
    />
</div> */}