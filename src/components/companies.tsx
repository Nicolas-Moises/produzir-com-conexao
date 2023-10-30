import Image from "next/image"
import Marquee from "react-fast-marquee"

import lapimienta from '../../public/la-pimienta.png'
import maescomcarreira from '../../public/maes-com-carreiras.jpg'
import spira from '../../public/logo-spira.webp'
import hippus from '../../public/hippus-aldeia.jpg'
import recanto from '../../public/recanto-tia-fernanda.png'
import pravaler from '../../public/pravaler.svg'
import pandora from '../../public/pandora.svg'
import alumna from '../../public/alumna.jpg'
import natali from '../../public/natali-cara.png'

export function Companies() {
    return (
        <section className="bg-white w-full rounded-b-3xl relative overflow-hidden px-4 ">
            <div className="container flex flex-col items-center pt-20 pb-24">
                <p className="text-zinc-700 uppercase font-semibold max-w-3xl text-center tracking-tight">
                    +10 times impactados com nossa mentoria.
                </p>
                <Marquee
                    pauseOnHover
                    autoFill
                    className="mt-10"
                    gradient
                    gradientColor="rgb(255, 255, 255)"
                    gradientWidth={200}
                    speed={100}
                >
                    <div className="w-32 mx-8 lg:mx-10">
                        <Image src={lapimienta} alt="" className="w-full object-contain" />
                    </div>
                    <div className="w-32 mx-8 lg:mx-10">
                        <Image src={alumna} alt="" className="w-full object-contain" />
                    </div>
                    <div className="w-32 mx-8 lg:mx-10 p-2 rounded-full bg-neutral-800">
                        <Image src={spira} alt="" className="w-full object-contain" />
                    </div>
                    <div className="w-28 mx-8 lg:mx-10 p-2">
                        <Image src={maescomcarreira} alt="" className="w-full object-contain rounded-full" />
                    </div>
                    <div className="w-32 mx-8 lg:mx-10">
                        <Image src={hippus} alt="" className="w-full object-contain" />
                    </div>
                    <div className="w-32 mx-8 lg:mx-10">
                        <Image src={recanto} alt="" className="w-full object-contain" />
                    </div>
                    <div className="w-32 mx-8 lg:mx-10">
                        <Image src={pravaler} alt="" className="w-full object-contain" />
                    </div>
                    <div className="w-32 mx-8 lg:mx-10">
                        <Image src={pandora} alt="" className="w-full object-contain" />
                    </div>
                    <div className="w-36 mx-8 lg:mx-10">
                        <Image src={natali} alt="" className="w-full object-contain" />
                    </div>
                </Marquee>
            </div>
        </section>
    )
}