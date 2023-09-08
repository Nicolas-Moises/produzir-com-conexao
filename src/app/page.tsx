import { AboutUs } from '@/components/about-us'
import { Contact } from '@/components/contact'
import { Features } from '@/components/features'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { Training } from '@/components/training'

export default function Home() {
  return (
    <main className="">
      <Hero />

      <AboutUs />
      <Features />
      <Training />

      <Contact />
      <Footer />
    </main>
  )
}
