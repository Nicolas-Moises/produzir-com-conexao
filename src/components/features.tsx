'use client'
import Image from "next/image";
import { GraduationCap, Sparkles, TrendingUp, Users, Wand2, Zap } from 'lucide-react'
import { Accordion, AccordionItem } from "@nextui-org/react"
import features from '../../public/feature.png'

const solutions = [
    {
        id: 1,
        title: 'Transformações Culturais',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ad unde sint nisi beatae! Eius, repellat quae. ',
        icon: Users
    },
    {
        id: 2,
        title: 'Desenvolvimento de habilidades',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ad unde sint nisi beatae! Eius, repellat quae. ',
        icon: Sparkles
    },
    {
        id: 4,
        title: 'Liderança',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ad unde sint nisi beatae! Eius, repellat quae. ',
        icon: Zap
    },
    {
        id: 3,
        title: 'Aprendizagem Presencial e virtual',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ad unde sint nisi beatae! Eius, repellat quae. ',
        icon: GraduationCap
    },
    {
        id: 5,
        title: 'Diagnóstico e consultoria',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ad unde sint nisi beatae! Eius, repellat quae. ',
        icon: TrendingUp
    },
    {
        id: 6,
        title: 'Fortalecimento de equipe',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ad unde sint nisi beatae! Eius, repellat quae. ',
        icon: Wand2
    },
]
export function Features() {
    return (
        <section className="bg-gradient-to-br from-orange-500 via-yellow-500 to-orange-400 w-full rounded-b-3xl -mt-10 relative overflow-hidden">
            <div className="flex overflow-hidden max-w-[calc(100vw-((100vw-1280px)/2))] xl:ml-auto pb-16 xl:pb-0">
                <div className="w-full flex flex-col xl:items-start items-center gap-14 pt-20 px-4">
                    <div className="flex flex-col gap-6 items-center xl:items-start">
                        <h2 className="text-[3rem] font-title font-bold tracking-tight text-white text-center">Mentoria personificada</h2>
                        <p className="text-white text-lg max-w-3xl text-center xl:text-left">
                            Com atuação no setor de joalheria, saúde, bem estar e educacional, oferecemos programas personalizados para desenvolver talentos e alcançar
                            resultados, de acordo com as necessidades dos clientes.
                        </p>
                    </div>

                    <Accordion variant="splitted" className="max-w-3xl ">

                        {solutions.map((item, i) => {
                            return (
                                <AccordionItem key={item.id} aria-label={item.title} title={item.title} startContent={<item.icon className="text-yellow-500" />}>
                                    <p className="text-zinc-600">
                                        {item.content}
                                    </p>
                                </AccordionItem>
                            )
                        })}
                    </Accordion>
                </div>

                <div className="poligon  h-full min-h-[750px] group hidden xl:flex">
                    <Image
                        src={features}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-150"
                        alt=""
                    />

                </div>
            </div>
        </section>
    )
}
