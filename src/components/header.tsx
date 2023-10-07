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
        <header className={`w-full px-4 z-50 bg-zinc-900 transition-colors duration-150`}>
            <div className="flex items-center justify-center lg:justify-between container">
                <Link href='/' className="w-36 h-36 md:w-28 md:h-28 flex items-center justify-center">
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
                                        ${color ? 'text-zinc-400' : 'text-zinc-400'} active:text-primary`}
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
                            <A
                                activeClass="active"
                                className='px-3.5 py-2 text-sm bg-gradient-to-bl from-pink-300 via-pink-600 to-pink-400 text-white 
                                hover:from-pink-400 hover:via-pink-500 hover:to-pink-400 ease flex items-center justify-center gap-2 font-medium
                                transition-all duration-150 cursor-pointer rounded-full'
                                to='contact'
                                spy={true}
                                smooth={true}
                                offset={200}
                                duration={300}
                            >
                                Contato
                            </A>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}