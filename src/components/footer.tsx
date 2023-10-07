import Image from "next/image";

import logo from '../../public/logo-produzir.png'
import { Instagram, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const links = [
    {
        id: 1,
        icon: Instagram,
        href: 'https://www.instagram.com/produzircomconexao/',
    },
    {
        id: 2,
        icon: Linkedin,
        href: 'https://www.linkedin.com/company/produzir-com-conex%C3%A3o/',
    },
    {
        id: 3,
        icon: Mail,
        href: 'mailto:produzircomconexao@gmail.com',
    },
]

export function Footer() {
    return (
        <footer className="w-full bg-zinc-900 border-t border-black pt-6 px-4" aria-labelledby="footer-heading">
            <h2 id="footer-heading max-w-7xl" className="sr-only">Footer</h2>
            <div className="container flex flex-col">
                <div className="flex items-start justify-between w-full">
                    <div className="w-32 h-32">
                        <a href="/" className="mx-auto">
                            <Image
                                alt=""
                                src={logo}
                                className="w-full object-cover"
                            />
                        </a>
                    </div>

                    <div className="flex flex-col gap-10 items-end">
                        <div className="flex items-center gap-4">
                            {links.map(link => {
                                return (
                                    <Link href={link.href} target="_blank" key={link.id}>
                                        <link.icon className="text-zinc-300 w-6 h-6 hover:text-primary" />
                                    </Link>
                                )
                            })}
                        </div>
                        <span className="self-end text-right mx-auto text-xs text-zinc-500">
                            Produzir Com Conexão © 2023. Todos os direitos reservados.
                        </span>
                    </div>

                </div>
            </div>
        </footer>
    )
}