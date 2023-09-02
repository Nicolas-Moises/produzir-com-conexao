import Image from "next/image";
import logo from '../../public/logo-produzir.png'

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
        <header className="bg-[#036c5f]">
            <div className="flex items-center justify-between w-full max-w-7xl mx-auto py-4">
                <Image className="w-32" src={logo} alt="" width={200} height={200} />

                <nav>
                    <ul className="flex items-center gap-8">
                        {navigation.map(item => {
                            return (
                                <li key={item.value}>
                                    <a href={item.href} className="text-zinc-200 hover:text-[#F4B324] font-medium text-sm cursor-pointer border-b pb-4 border-transparent hover:border-orange-500 transition-colors duration-150">
                                        {item.title}
                                    </a>
                                </li>
                            )
                        })}

                        <li>
                            <a href="#" className="px-6 py-3 rounded-full bg-[#F4B324] hover:bg-[#F4B324]/80 text-black font-medium text-sm transition-colors duration-150">
                                Contatos
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}