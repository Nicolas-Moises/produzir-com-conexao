'use client'
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Testimonial } from "./testimonial"

import { useKeenSlider } from 'keen-slider/react'

const testimonials = [
    {
        author: 'Jullyana',
        id: 1,
        role: 'Treinadora de liderança de equipe',
        content: 'Foi um projeto super desafiador porém as profissionais com as quais tive o privilégio de trabalhar fizeram toda a diferença e você Érika é uma destas pessoas lindas que o mundo merece conhecer.'
    },
    {
        author: 'Cecilia',
        id: 2,
        role: 'Lic. em Turismo e Hotelaria',
        content: 'Erika, muito obrigada pela sua contribuição no projeto, fez toda a diferença! Fico feliz de ter trabalhado contigo, até uma próxima oportunidade!!! 🤗👏'
    },
    {
        author: 'Isabelli',
        id: 3,
        role: 'Auxiliar administrativo em Pandora',
        content: 'Parabéns, você foi a melhor... Obrigado por nos ajudar para o nosso crescimento e sucesso pra você sempre ❤'
    },
    {
        author: 'Aline',
        id: 4,
        role: 'Psicóloga Clínica, Treinadora Corporativa e Palestrante',
        content: 'Foi simplesmente maravilhoso ter atuado ao lado de uma profissional tão dedicada e cheia de amor na prática do desenvolvimento. Espero que em breve tenhamos novamente essa mesma parceria!!! 👏👏👏👏🙌💗'
    },
    {
        author: 'Fernanda',
        id: 5,
        role: 'Gerente de vendas em Pandora',
        content: 'Parabéns Érika, fez um excelente trabalho! Foram meses de aprendizado e experiências maravilhosas e com elas nos tornaremos melhores no que somos e no que fazemos. Parabéns a Pandora por nos dar essa oportunidade de crescimento.'
    },
    {
        author: 'Cristiane',
        id: 6,
        role: 'Gerente de vendas em Pandora',
        content: 'Parabéns por todo o desempenho e paixão em dar o seu melhor! Que você venha colher os bons frutos, você merece muito.'
    },
    {
        author: 'Cristiane',
        id: 7,
        role: 'Gerente de vendas em Pandora',
        content: 'Parabéns por todo o desempenho e paixão em dar o seu melhor! Que você venha colher os bons frutos, você merece muito.'
    },
]
export function Testimonials() {
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        slides: {
            perView: 1,
            spacing: 48,
        },
    })

    return (
        <section className="bg-white w-full rounded-b-3xl relative overflow-hidden px-4">
            <div className="w-full max-w-7xl flex flex-col items-center gap-14 mx-auto pt-20 pb-24">
                <div className="flex flex-col gap-4 lg:gap-6 items-center">
                    <h2 className="text-3xl lg:text-4.5xl font-title font-bold tracking-tight text-zinc-800 text-center">
                        Alguns feedbacks que recebemos em nossa jornada
                    </h2>
                    <p className="text-[#1C191A]/80 text-lg font-medium max-w-3xl text-center">
                        Depoimentos quentinhos de quem passou por nossos programas de desenvolvimento.
                    </p>
                </div>
                <div className="mx-auto w-full max-w-4xl">
                    <div
                        className="keen-slider mt-20 cursor-grab active:cursor-grabbing"
                        ref={sliderRef}
                    >
                        {testimonials.map((message) => {
                            return (
                                <Testimonial
                                    key={message.id}
                                    author={message.author}
                                    message={message.content}
                                    role={message.role}
                                />
                            )
                        })}
                    </div>
                </div>
                <div className="mt-10 flex gap-3 self-end">
                    <button
                        className="p-3 rounded-full border border-zinc-300 group hover:border-yellow-500"
                        type="button"
                        onClick={(e: any) =>
                            e.stopPropagation() || instanceRef.current?.prev()
                        }
                    >
                        <ChevronLeft
                            size={24}
                            className="cursor-pointer text-zinc-500 group-hover:text-pink-400"

                        />
                    </button>
                    <button
                        className="p-3 rounded-full border border-zinc-300 group hover:border-yellow-500"
                        type="button"
                        onClick={(e: any) =>
                            e.stopPropagation() || instanceRef.current?.next()
                        }
                    >
                        <ChevronRight
                            size={24}
                            className="cursor-pointer text-zinc-500 group-hover:text-pink-400"
                        />
                    </button>
                </div>

            </div>
        </section>
    )
}