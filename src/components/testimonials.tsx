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
        author: 'Guilherme',
        id: 7,
        role: 'Coordenador de contabilidade e fiscal',
        content: 'Muito obrigado pelo empenho e pela entrega. Foi muito bom... Parabéns. Os pontos que você trouxe e apresentou foram assertivos com o momento que estamos passando'
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
            <div className="container flex flex-col items-center pt-20 pb-24">
                <p className="text-zinc-800 uppercase text-sm font-medium max-w-3xl text-center">
                    Depoimentos quentinhos de quem passou por nossos programas de desenvolvimento.
                </p>
                <div className="mx-auto max-w-6xl grid grid-cols-[36px_1fr_36px] gap-6">
                    <div className="flex justify-start items-center bg-white z-20">
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
                    </div>
                    <div
                        className="keen-slider mt-10 cursor-grab active:cursor-grabbing max-w-4xl mx-auto"
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
                    <div className="flex justify-end items-center">
                        <button
                            className="p-3 rounded-full border border-zinc-300 group hover:border-yellow-500 bg-white z-20"
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
            </div>
        </section>
    )
}