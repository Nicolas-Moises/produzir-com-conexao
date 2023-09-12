'use client'

import Image from 'next/image'
import * as Tabs from '@radix-ui/react-tabs'

import caseOne from '../../public/case-1.jpg'
import caseTwo from '../../public/case-2.jpg'
import caseThree from '../../public/case-4.jpeg'
import scribble from '../../public/scribble.png'
import pattern from '../../public/pattern-about.png'
import { useState } from 'react'

import { motion } from 'framer-motion'

const excluses = [
    {
        id: '1',
        title: 'Aprendizagem experiencial',
        content:
            ['Aprender através de experiências práticas e interativas', 'Aprender fazendo, não apenas ouvindo lendo ou assistindo',],
        item: caseOne,
    },
    {
        id: '2',
        title: 'Prático e Interativo',
        content:
            ['Aprender através de experiências práticas e interativas', 'Aprender fazendo, não apenas ouvindo lendo ou assistindo',],
        item: caseTwo,
    },
    {
        id: '3',
        title: 'Conciliação automática',
        content:
            ['Aprender através de experiências práticas e interativas', 'Aprender fazendo, não apenas ouvindo lendo ou assistindo',],
        item: caseThree,
    },
]

export function Training() {
    const [activeTab, setActiveTab] = useState(excluses[0].id)

    return (
        <section className="relative bg-orange-400 flex w-full flex-col items-center border-y border-black overflow-hidden">
            <div className='absolute top-1/3 left-0 w-52'>
                <Image src={scribble} alt='' className='w-full' />
            </div>
            <div className='absolute -top-0 -right-0 w-60'>
                <Image src={pattern} alt='' className='w-full' />
            </div>
            <div className='w-full max-w-7xl mx-auto py-20'>
                <div className="flex flex-col items-center">
                    <h4 className="text-5xl z-20 font-title font-bold tracking-tight text-black text-center">
                        Aquela dúvida: <br />E, por que treinar?
                    </h4>
                </div>
                <Tabs.Root
                    defaultValue={'1'}
                    className="mt-20 flex w-full flex-col lg:flex-row-reverse items-center"
                    orientation="vertical"
                >
                    <Tabs.List className="flex flex-col items-center lg:items-start justify-center gap-2">
                        {excluses.map((excluse) => {
                            return (
                                <Tabs.Trigger
                                    key={excluse.id}
                                    value={`${excluse.id}`}
                                    onClick={() => setActiveTab(excluse.id)}
                                    className="group relative w-full max-w-xl transition-transform duration-150"
                                >
                                    {activeTab === excluse.id && (
                                        <motion.div
                                            className="absolute inset-0 bg-orange-100"
                                            layoutId="active-pill"
                                        />
                                    )}
                                    <div className="relative z-10 flex flex-col items-start gap-2 bg-transparent p-6 transition-colors duration-150 group-hover:bg-orange-300/10">
                                        <strong className="font-title text-zinc-800 group-data-[state=active]:text-orange-600">
                                            {excluse.title}
                                        </strong>

                                        {excluse.content.map((item, i) => {
                                            return <p className="text-left flex flex-col gap-1 text-sm text-black" key={i}>
                                                {item}
                                            </p>
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
                                className="flex-1 overflow-hidden z-20 h-[400px] rounded-2xl data-[state=active]:animate-scaleIn"
                            >
                                <Image
                                    src={excluse.item}
                                    priority
                                    alt=""
                                    className="mx-auto mt-16 lg:mt-0 lg:mr-auto w-[80%]  h-full rounded-2xl object-cover"
                                />
                            </Tabs.Content>
                        )
                    })}
                </Tabs.Root>
            </div>
        </section>
    )
}