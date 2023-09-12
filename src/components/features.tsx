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
        <section className=" w-full relative overflow-hidden py-24 bg-[#FF90E8]">
            <div className="flex overflow-hidden max-w-7xl mx-auto ">
                <div className="w-full flex flex-col items-center gap-14 px-4">
                    <div className="flex flex-col gap-6 items-center">
                        <h2 className="text-5xl font-title font-bold tracking-tight text-black text-center">Mentoria personificada</h2>
                        <p className="text-zinc-800 text-lg max-w-3xl text-center ">
                            Com atuação no setor de joalheria, saúde, bem estar e educacional, oferecemos programas personalizados para desenvolver talentos e alcançar
                            resultados, de acordo com as necessidades dos clientes.
                        </p>
                    </div>

                    <Accordion variant="splitted" className="w-full max-w-5xl">

                        {solutions.map((item, i) => {
                            return (
                                <AccordionItem 
                                className="border border-black"
                                    key={item.id} 
                                    aria-label={item.title} 
                                    title={item.title} 
                                    startContent={<item.icon className="text-yellow-500" />}
                                >
                                    <p className="text-zinc-600">
                                        {item.content}
                                    </p>
                                </AccordionItem>
                            )
                        })}
                    </Accordion>
                </div>

    
            </div>
        </section>
    )
}
