import { Quote } from 'lucide-react'
interface TestimonialCardProps {
    message: string
    author: string
    role: string
}

export function Testimonial(props: TestimonialCardProps) {
    return (
        <div className="keen-slider__slide flex flex-col justify-between rounded-3xl bg-white px-8 pb-8 pt-14 border-small border-black ">
            <div className="flex items-start">
                <Quote size={32} className="fill-pink-400 text-pink-400" />
                <p className="mt-4 flex flex-1 items-start text-center text-2xl font-medium text-zinc-600">
                    {props.message}
                </p>
            </div>
            <div className="mt-6 flex flex-col items-center">

                <div className="flex flex-col items-center gap-2 text-zinc-600">
                    <h2 className="font-semibold">{props.author}</h2>
                    <span className="text-xs text-zinc-400">{props.role}</span>
                </div>
            </div>
        </div>
    )
}