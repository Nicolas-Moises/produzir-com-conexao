'use client'

import Image from 'next/image'
import * as Tabs from '@radix-ui/react-tabs'

import star from '../../public/star.svg'
import { BarChart3, GraduationCap, MonitorSmartphone, ScrollText, Share2, Shrink, TrendingUp } from 'lucide-react'
import { CursorArrowRays } from './icons/cursor.arrow-rays'
import { Announcement } from './icons/announcement'
import { Rocket } from './icons/rocket'

const features = [
    {
        id: 1,
        icon: <BarChart3 size={20} className="h-5 w-5 " />,
        title: 'Motivação',
        content: 'Colaboradores motivados estão mais dispostos a darem sempre o melhor de si.',
    },
    {
        id: 2,
        icon: <Shrink size={20} className="h-5 w-5 " />,
        title: 'Aprendizagem experiencial',
        content: 'Aprender através de experiências práticas e interativas.',
    },
    {
        id: 3,
        icon: <CursorArrowRays className="h-5 w-5 " />,
        title: 'Prática > teoria',
        content:
            'Aprender fazendo, não apenas ouvindo lendo ou assistindo.',
    },
    {
        id: 4,
        icon: <Share2 size={20} className="h-5 w-5 " />,
        title: 'Métodologia',
        content:
            'Agilidade no processo de conhecimento e aplicabilidade.',
    },
    {
        id: 5,
        icon: <Announcement className="h-5 w-5 " />,
        title: 'Engajamento e experiência',
        content:
            'Aprendizado por experiencia para expansão e engajamento.',
    },
    {
        id: 6,
        icon: <GraduationCap size={20} className="h-5 w-5 " />,
        title: 'Aprendizado',
        content:
            'Personalização da Metodologia para melhor assimilação do aprendizado.',
    },
    {
        id: 7,
        icon: <TrendingUp size={20} className="h-5 w-5 " />,
        title: 'Expansão',
        content:
            'Processo de aprendizagem com promoção de expansão dos times. Atividade experiencial para expansão do aprendizado',
    },
    {
        id: 8,
        icon: <Rocket className="h-5 w-5 " />,
        title: 'Praticidade',
        content:
            'Transformamos principios complexos em ferramentas praticas aplicáveis imediamente no trabalho.',
    },
]

export function Training() {

    return (
        <section className="scroll-mt-20 relative flex w-full flex-col items-centeroverflow-hidden pt-16 pb-24 px-4" id="training">
            <div className='container'>
                <div className="flex flex-col items-center max-w-5xl mx-auto">
                    <Image
                        src={star}
                        alt=''
                        className='w-10 h-10 mb-12'
                    />
                    <h4 className="text-5xl z-20 font-title font-bold tracking-tight text-black text-center mb-4">
                        E, por que treinar?
                    </h4>

                    <p className='text-zinc-800 text-center'>
                        A condução dos treinamentos comportamentais contribuem de forma efetiva para que a
                        liderança e equipe encarem os desafios cotidianos com mais garra e se envolvam mais com as
                        metas e objetivos estabelecidos pela companhia
                    </p>
                </div>
                <div className="mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:place-items-center">
                    {features.map((feature) => {
                        return (
                            <div
                                className="group flex sm:h-44 flex-1 flex-col items-start border border-dashed border-zinc-400/20 p-6 transition-colors duration-150 hover:bg-gradient-to-tr"
                                key={feature.id}
                            >
                                <div className="mb-4 flex items-center gap-4">
                                    <div
                                        className="rounded-full border border-orange-400 bg-gradient-to-r from-orange-400 to-orange-500 p-2 text-white transition-all 
                                            duration-200"
                                    >
                                        {feature.icon}
                                    </div>
                                    <h2 className="text-lg font-bold text-zinc-600">
                                        {feature.title}
                                    </h2>
                                </div>
                                <p className="text-sm leading-relaxed text-zinc-500">
                                    {feature.content}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}