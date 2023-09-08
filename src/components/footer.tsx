import Image from "next/image";

import logo from '../../public/logo-produzir.png'

export function Footer() {
    return (
        <footer className="w-full bg-zinc-800" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16">
                <div className="flex flex-col items-baseline space-y-2">
                    <div className="mx-auto w-44 h-44">
                        <a href="/" className="mx-auto w-44 h-44">
                            <Image
                                alt=""
                                src={logo}
                                className="w-full object-cover"
                            />
                        </a>
                    </div>
                    <div className="mx-auto">
                        <span className="mx-auto text-sm text-gray-500">
                            Produzir Com Conexão © 2023. Todos os direitos reservados.
                            <a href="https://www.instagram.com/produzircomconexao/" className="mx-2 text-yellow-600 hover:text-zinc-600">@Produzircomconexao</a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}