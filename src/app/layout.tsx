import { Header } from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Lexend, Familjen_Grotesk } from 'next/font/google'
import { Providers } from "./providers"
import 'keen-slider/keen-slider.min.css'
import { Toaster } from "react-hot-toast";

import Mooli from 'next/font/local'
import { Footer } from '@/components/footer'

const lexend = Lexend({
  subsets: ['latin'],
  fallback: ['ui_sans'],
  variable: '--font-lexend',
  preload: true,
})

const familjenGrotesk = Familjen_Grotesk({
  subsets: ['latin'],
  display: 'fallback',
  variable: '--font-familjen-grotesk',
  fallback: ['system-ui', 'mono'],
  weight: '700',
})
// Font files can be colocated inside of `app`
const mooli = Mooli({
  src: '../assets/fonts/mooli-regular.ttf',
  variable: '--font-recoleta',
  preload: true,
})

export const metadata: Metadata = {
  title: 'Produzir com Conexão',
  description: 'Consultoria Epecializada em treianmento e desenvolvimento Humano por meio do autoconhecimento',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={`antialiased ${lexend.variable} ${mooli.variable} ${familjenGrotesk.variable} font-sans scroll-smooth`}>
        <Providers>
          <div className='relative overflow-hidden'>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
          </div>
        </Providers>
      </body>
    </html>
  )
}
