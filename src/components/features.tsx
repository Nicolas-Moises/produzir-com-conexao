'use client'
import Image from "next/image"
import { GraduationCap, Sparkles, Users, Wand2, Zap } from 'lucide-react'
import { Accordion, AccordionItem } from "@nextui-org/react"
import pattern from '../../public/pattern.svg'

const solutions = [
    {
        id: 1,
        title: 'Transformações Culturais',
        content: [
            'A Cultura da empresa é determinante para direcionar os passos dos colaboradores em seu negócio, além das ações estratégicas do RH e das lideranças. Só se tem clareza do caminho a ser seguido quando a cultura é bem difundida entre a equipe.',
            'Isso garante o alinhamento de todos os times em prol de um mesmo propósito e de objetivos que se complementam. A cultura é protagonista no processo de evolução corporativa, pois é a única maneira de integrar diferentes pessoas em um convívio diário e de gerar engajamento e expansão dos resultados.',
            'Ela também é a chave para mudanças de ambiente e objetivos competitivos da empresa. É o que permite passar de um regime controlador para relações de trabalho com mais autonomia e vice-versa. Tudo está sujeito às exigências momentâneas de cada negócio.'],
        icon: Users
    },
    {
        id: 2,
        title: 'Desenvolvimento de habilidades',
        content: [
            'Para muitos gestores de RH, é mais fácil treinar alguém tecnicamente do que mudar hábitos e comportamentos. Logo, o profissional que já possui as soft skills, como são conhecidas, ganha vantagem competitiva em relação à concorrência, o nível de relevância é de 58%.',
            'Uma pesquisa feita pela empresa de consultoria PwC apontou que, cerca de 1.200 líderes e RH de empresas, 87% dos entrevistados, consideram o desenvolvimento de habilidades humanas como uma das principais estratégias para preparar as empresas para o futuro. ',
            'Momentos de desafios exigem que as empresas estejam preparadas para superar as adversidades. E, para que isso seja possível é essencial contar com um capital humano que seja capaz de lidar com imprevistos e grande adaptabilidade, tenha um mindset ágil e seja inovador na solução de problemas. ',
            'Existem aquelas habilidades que são vistas como diferenciais por vários setores. Segue algumas delas:',
            'Adaptabilidade: principalmente em tempos de crise, o profissional deve ser capaz de se adaptar aos novos cenários, conseguindo responder com agilidade às situações adversas que possam aparecer pelo caminho.',
            'Liderança: é o profissional capaz de influenciar e persuadir pessoas. Sabe como delegar funções e extrair o melhor de cada um da sua equipe.',
            'Criatividade e inovação: ganha destaque o profissional capaz de propor soluções criativas para lidar com as adversidades de um mercado tão dinâmico.',
            'Pensamento ágil: profissionais chamados turnaround são robustos, ágeis, resilientes, possuem visão sistêmica, correlacionam possiblidades, criam soluções inovadoras, são profissionais com altíssima performance e estão preparados para ambientes incertos e desafiadores.'
        ],
        icon: Sparkles
    },
    {
        id: 4,
        title: 'Liderança',
        content: [
            '"Conheça todas as teorias, domine todas as técnicas, mas ao tocar uma alma humana, seja apenas outra alma humana".Carl Jung',
            'Liderança é a habilidade de influenciar e orientar pessoas em determinado grupo a fim de direcionar ações para alcançar objetivos comuns. Na prática, vai muito além de um simples comando. Trata-se de inspirar, motivar, engajar e gerenciar as pessoas de um time.',
        ],
        icon: Zap
    },
    {
        id: 3,
        title: 'Aprendizagem Presencial e virtual',
        content: [
            'A educação online — também conhecida como e-learning — continua ganhando terreno à presencial e os estudantes que experimentaram esse tipo de ensino já são maioria. 77% dos jovens do mundo têm em seu currículo algum curso online, online, segundo revela uma pesquisa da Global Shapers publicada pelo Fórum Econômico Mundial (WEF) e a tendência é aumentar.',
            'Outra evidência do crescimento global do treinamento à distância é o número de usuários de plataformas de cursos online: as cinco mais utilizadas em âmbito mundial somaram um total de quase 90 milhões de alunos em 2018 e mais de 900 universidades incorporaram nesse mesmo ano os MOOC — cursos online massivos e abertos — à sua oferta educativa, tal como aponta o buscador de seminários Class Central.',
            'A América do Norte e a região da Ásia-Pacífico lideram a indústria do ensino online que, de acordo com o relatório de previsões Global Online Education Market: Forecasts from 2018 to 2023, obterá uma taxa de crescimento anual de 10,26% nos próximos quatro anos e superará os 286.000 bilhões de dólares de valor de mercado em 2023.',
        ],
        icon: GraduationCap
    },
]
export function Features() {
    return (
        <section className=" w-full relative overflow-hidden py-24 bg-background-light" id="cases">
            <div className="container flex flex-col items-center px-4">
                <div className="flex flex-col items-center">
                    <span className="text-sm font-semibold text-zinc-600 text-center py-1 px-2 mb-4">
                        Encontre significado no seu trabalho através do autoconhecimento
                    </span>
                    <h2 className="text-5xl font-title font-bold tracking-tight text-black text-center">
                        Mentoria personificada
                    </h2>
                    <p className="text-zinc-800 text-lg max-w-4xl text-center mt-6">
                        Com atuação no setor de joalheria, empresas de manufatura, desenvolvimento humano, saúde, bem estar e educacional, oferecemos programas personalizados para desenvolver talentos e alcançar
                        resultados, de acordo com as necessidades dos clientes.
                    </p>
                </div>
                <div className="relative w-full rounded-3xl bg-orange-300 flex justify-center py-24 mt-10">
                    <Image
                        src={pattern}
                        alt=""
                        className="absolute top-6 left-40"
                    />
                    <Accordion variant="splitted" className="w-full max-w-5xl" defaultExpandedKeys={["1"]}>
                        {solutions.map((item, i) => {
                            return (
                                <AccordionItem
                                    className=""
                                    key={item.id}
                                    aria-label={item.title}
                                    title={item.title}
                                    startContent={<item.icon className="text-yellow-500" />}
                                >
                                    {item.content.map((content, i) => {
                                        return (
                                            <p className="text-zinc-600 my-3" key={i}>
                                                {content}
                                            </p>
                                        )
                                    })}
                                </AccordionItem>
                            )
                        })}
                    </Accordion>
                </div>

            </div>
        </section>
    )
}
