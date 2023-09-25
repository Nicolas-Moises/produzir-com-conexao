'use client'

import Image from 'next/image'
import * as Tabs from '@radix-ui/react-tabs'

import caseOne from '../../public/case-5.jpeg'
import caseTwo from '../../public/case-2.jpg'
import caseThree from '../../public/case-4.jpeg'
import star from '../../public/star.svg'
import { useState } from 'react'

import { motion } from 'framer-motion'

const excluses = [
    {
        id: '1',
        title: 'Aprendizagem experiencial',
        content: [
            'Aprender através de experiências práticas e interativas; Aprender fazendo, não apenas ouvindo lendo ou assistindo',
            'Agilidade no processo de conhecimento e aplicabilidade',
            'Metodologia testada para o desenvolvimento de novas habilidades',
            'Aprendizado por experiencia para expansão e engajamento',
            'Personalização da Metodologia para melhor assimilação do aprendizado',
            'Processo de aprendizagem com promoção de expansão dos times',
            'Atividade experiencial para expansão do aprendizado'
        ],
        item: caseOne,
    },
    {
        id: '2',
        title: 'Prático e Interativo',
        content: [
            'Transformamos principios complexos em ferramentas praticas; Participantes podem aplicar essas ferramentas imediatamente no trabalho',
        ],
        item: caseTwo,
    },
]

export function Training() {
    const [activeTab, setActiveTab] = useState(excluses[0].id)

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
                        Colaboradores motivados estão mais dispostos a darem sempre o melhor de si.
                    </p>
                    <p className='text-zinc-800 text-center'>
                        Portanto,
                        a condução dos treinamentos comportamentais contribuem de forma efetiva para que a
                        liderança e equipe encarem os desafios cotidianos com mais garra e se envolvam mais com as
                        metas e objetivos estabelecidos pela companhia
                    </p>
                </div>
                <Tabs.Root
                    defaultValue={'1'}
                    className="mt-14 flex w-full flex-col lg:flex-row lg:gap-6 items-center bg-secondary rounded-3xl p-8"
                    orientation="vertical"
                >
                    <Tabs.List className="flex flex-col w-full max-w-2xl items-center lg:items-start justify-center gap-2">
                        {excluses.map((excluse) => {
                            return (
                                <Tabs.Trigger
                                    key={excluse.id}
                                    value={`${excluse.id}`}
                                    onClick={() => setActiveTab(excluse.id)}
                                    className="group relative transition-transform duration-150 "
                                >
                                    {activeTab === excluse.id && (
                                        <motion.div
                                            className="absolute inset-0 bg-pink-100 rounded-xl"
                                            layoutId="active-pill"
                                        />
                                    )}
                                    <div className="relative z-10 flex flex-col items-start gap-2 bg-transparent p-6 transition-colors duration-150
                                    group-hover:bg-orange-300/10">
                                        <strong className="font-title text-xl text-zinc-800 group-data-[state=active]:text-pink-600">
                                            {excluse.title}
                                        </strong>
                                        {excluse.content.map((text, i) => {
                                            return (
                                                <span
                                                    key={i}
                                                    className=" text-left text-sm text-zinc-800"
                                                >
                                                    {text}
                                                </span>
                                            )
                                        })}
                                    </div>
                                </Tabs.Trigger>
                            )
                        })}
                    </Tabs.List>
                    {excluses.map((excluse) => {
                        return (
                            <Tabs.Content
                                key={excluse.id}
                                value={`${excluse.id}`}
                                className="overflow-hidden z-20 h-[500px] data-[state=active]:animate-scaleIn rounded-xl lg:max-w-2xl ml-auto"
                            >
                                <Image
                                    src={excluse.item}
                                    priority
                                    alt=""
                                    className="mt-16 lg:mt-0 lg:mr-auto h-full object-cover rounded-xl"
                                />
                            </Tabs.Content>
                        )
                    })}
                </Tabs.Root>
            </div>
        </section>
    )
}