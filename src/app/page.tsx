import { AboutUs } from '@/components/about-us'
import { Contact } from '@/components/contact'
import { Features } from '@/components/features'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Testimonials } from '@/components/testimonials'
import { Training } from '@/components/training'

export default function Home() {
  return (
    <main className="">
      <Hero />

      <AboutUs />
      <Training />
      <Features />
      <Testimonials />
      <Contact />
    </main>
  )
}
