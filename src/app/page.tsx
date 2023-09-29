import { AboutUs } from '@/components/about-us'
import { Companies } from '@/components/companies'
import { Contact } from '@/components/contact'
import { Features } from '@/components/features'
import { Hero } from '@/components/hero'
import { Testimonials } from '@/components/testimonials'
import { Training } from '@/components/training-v2'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Companies />
      <AboutUs />
      <Training />
      <Features />
      <Testimonials />
      <Contact />
    </main>
  )
}
