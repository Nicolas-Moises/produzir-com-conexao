import { Briefcase, Goal, ListTodo } from "lucide-react"
import Image from "next/image"
import trainingImage from '../../public/training.png'

const training = [
    {
        id: 1,
        title: 'Aprendizagem experiencial',
        content: ['Aprender através de experiências práticas e interativas', 'Aprender fazendo, não apenas ouvindo lendo ou assistindo',],
        icon: Briefcase
    },
    {
        id: 2,
        title: 'Prático e Interativo',
        content: ['Aprender através de experiências práticas e interativas', 'Aprender fazendo, não apenas ouvindo lendo ou assistindo',],
        icon: ListTodo
    },
    {
        id: 3,
        title: 'Foco em resultados',
        content: ['Aprender através de experiências práticas e interativas', 'Aprender fazendo, não apenas ouvindo lendo ou assistindo',],
        icon: Goal
    },
]

export function Training() {
    return (
        <section className="bg-white w-full rounded-b-3xl relative overflow-hidden px-4">
            <div className="w-full max-w-7xl flex flex-col items-center gap-14 mx-auto pt-20 pb-24">
                <div className="flex flex-col gap-4 lg:gap-6 items-center">
                    <h2 className="text-3xl lg:text-4.5xl font-title font-bold tracking-tight text-zinc-800 text-center">
                        Aquela dúvida: <br />E, por que treinar?
                    </h2>
                    <p className="text-[#1C191A]/80 text-lg font-medium max-w-3xl text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis fugit quam iure, et distinctio sunt quae aperiam minus cumque aliquid pariatur?
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto">

                    {training.map(item => {
                        return (
                            <div className="max-w-sm p-4" key={item.id}>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-t from-pink-500 to-pink-300">
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <strong className="text-zinc-800 font-semibold text-lg tracking-tight">{item.title}</strong>
                                </div>
                                <div className="space-y-4 mt-4">
                                    {item.content.map(text => {
                                        return (
                                            <div key={text} className="flex gap-2 items-start">
                                                <span className="flex-1 text-sm leading-none text-zinc-600">
                                                    - {text}
                                                </span>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>


                <div className="w-full overflow-hidden rounded-2xl group">
                    <Image
                        src={trainingImage}
                        alt=""
                        className="w-full object-cover hover:scale-105 transition-transform duration-150"
                    />
                </div>

            </div>
        </section>
    )
}