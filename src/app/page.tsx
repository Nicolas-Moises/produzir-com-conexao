import { AboutUs } from '@/components/about-us'
import { Features } from '@/components/features'
import { Hero } from '@/components/hero'
import { Training } from '@/components/training'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <AboutUs />
      <Features />
      <Training />
    </main>
  )
}
