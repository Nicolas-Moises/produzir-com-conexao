'use client'
import Image from "next/image";
import aboutus from '../../public/features-2.png'
import { Button, Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";

export function AboutUs() {
    return (
        <section className="w-full relative rounded-b-3xl -mt-10 px-4">
            <div className="w-full max-w-7xl flex flex-col-reverse lg:flex-row gap-14 lg:gap-0 items-center mx-auto pt-36 pb-24 overflow-hidden">
                <div className="aspect-square flex items-center justify-center w-full max-w-xl group overflow-hidden rounded-2xl">
                    <Image
                        src={aboutus}
                        alt=""
                        quality={100}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-150"
                        width={1035}
                        height={1475}
                    />
                </div>
                <Card className="xl:ml-auto mr-6 shadow-none z-20 border-none max-w-xl p-6">
                    <CardHeader>
                        <h2 className="text-5xl font-title font-bold tracking-tight text-zinc-800 text-center lg:text-left">Mas, quem somos?</h2>
                    </CardHeader>
                    <CardBody className="p-3">
                        <div className="space-y-3 text-center lg:text-left">
                            <p className="medium text-zinc-600 max-w-3xl">
                                Oferecemos treinamentos personalizados alinhados com a estratégia da empresa, usando experiências
                                para fortalecer as equipes.
                            </p>
                            <p className="medium text-zinc-600 max-w-3xl">
                                Somos especializados em desenvolvimento humano, com foco em comportamento e habilidades interpessoais.
                            </p>
                            <p className="medium text-zinc-600 max-w-3xl">
                                Acreditamos que o trabalho não é apenas nossas tarefas, mas também como nos sentimos e nos destacamos. Nossas
                                ações moldam o sucesso e pessoas mais felizes, são mais produtivas.
                            </p>
                        </div>
                    </CardBody>

                    <CardFooter>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-center lg:justify-start w-full">
                            <Button radius='none' className="bg-pink-500 text-white">
                                Agendar uma reunião
                            </Button>
                            <Button radius='none' color="warning" className="">
                                Fale conosco
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </section>
    )
}