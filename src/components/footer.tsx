import Image from "next/image";

import logo from '../../public/logo-produzir.png'

export function Footer() {
    return (
        <footer className="w-full bg-zinc-800 border-t border-black" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="px-4 pb-4 pt-8 mx-auto max-w-7xl sm:px-6 lg:px-16">
                <div className="flex flex-col items-baseline">
                    <div className="mx-auto w-36 h-36">
                        <a href="/" className="mx-auto w-44 h-44">
                            <Image
                                alt=""
                                src={logo}
                                className="w-full object-cover"
                            />
                        </a>
                    </div>
                    <div className="mx-auto -mt-4">
                        <span className="mx-auto text-sm text-zinc-500">
                            Produzir Com Conexão © 2023. Todos os direitos reservados.
                            <a href="https://www.instagram.com/produzircomconexao/" className="mx-2 text-yellow-600 hover:text-zinc-100">@Produzircomconexao</a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}