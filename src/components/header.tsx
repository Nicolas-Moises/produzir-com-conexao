'use client'
import Image from "next/image";
import logo from '../../public/logo-produzir.png'
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import { Link as A } from 'react-scroll/modules'

const navigation = [
    {
        title: 'Home',
        value: 'home',
        href: '#',
    },
    {
        title: 'Quem somos',
        value: 'about-us',
        href: '#',
    },
    {
        title: 'Mentoria personificada',
        value: 'training',
        href: '#',
    },
    {
        title: 'Cases',
        value: 'cases',
        href: '#',
    },
]

export function Header() {
    const [color, setColor] = useState(false)

    return (
        <header className={`w-full px-4 fixed top-0 left-0 right-0 z-50 ${color ? 'backdrop-blur-xl bg-zinc-900/70' : 'bg-zinc-900'} transition-colors duration-150`}>
            <div className="flex items-center justify-center lg:justify-between w-full max-w-7xl mx-auto">
                <Link href='/' className="w-28 h-28 flex items-center justify-center">
                    <Image className="w-full object-cover" src={logo} alt="" width={100} height={100} />
                </Link>

                <nav className="hidden lg:flex py-3">
                    <ul className="flex items-center gap-8">
                        {navigation.map(item => {
                            return (
                                <li key={item.value}>
                                    <A
                                        activeClass="active"
                                        className={`hover:text-primary font-medium text-sm cursor-pointer pb-4 transition-colors duration-150
                                        ${color ? 'text-zinc-100' : 'text-zinc-300'} active:text-primary`}
                                        to={item.value}
                                        spy={true}
                                        smooth={true}
                                        offset={200}
                                        duration={300}
                                    >
                                        {item.title}
                                    </A>
                                </li>
                            )
                        })}

                        <li>
                            <Button radius="sm" color="primary" href="#contact" as={Link}>
                                Contatos
                            </Button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}