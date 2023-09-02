import { AboutUs } from '@/components/about-us'
import { Hero } from '@/components/hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <AboutUs />
    </main>
  )
}
