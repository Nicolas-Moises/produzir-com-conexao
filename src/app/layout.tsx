import { Header } from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import { Providers } from "./providers"
import 'keen-slider/keen-slider.min.css'

import Mooli from 'next/font/local'
import { Footer } from '@/components/footer'

const lexend = Lexend({
  subsets: ['latin'],
  fallback: ['ui_sans'],
  variable: '--font-lexend',
  preload: true,
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
      <body className={`antialiased ${lexend.variable} ${mooli.variable} font-sans scroll-smooth`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
