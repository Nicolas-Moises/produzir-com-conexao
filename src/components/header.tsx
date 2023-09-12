'use client'
import Image from "next/image";
import logo from '../../public/logo-produzir.png'
import { Button } from "@nextui-org/react";

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
        title: 'Cases',
        value: 'cases',
        href: '#',
    },
    {
        title: 'Mentoria personificada',
        value: 'training',
        href: '#',
    },
]

export function Header() {

    return (
        <header className="bg-zinc-800 w-full px-4 border-b border-zinc-600">
            <div className="flex items-center justify-center lg:justify-between w-full max-w-7xl mx-auto">
                <div className="rounded-full w-36 h-36 flex items-center justify-center z-50">
                    <Image className="w-full object-cover" src={logo} alt="" width={200} height={200} />
                </div>

                <nav className="hidden lg:flex">
                    <ul className="flex items-center gap-8">
                        {navigation.map(item => {
                            return (
                                <li key={item.value}>
                                    <a href={item.href} className="text-zinc-300 hover:text-[#F4B324] font-medium text-sm cursor-pointer pb-4 transition-colors duration-150">
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}

                        <li>
                            <Button radius="none" color="warning">
                                Contatos
                            </Button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}