import { Header } from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import { Instrument_Sans } from 'next/font/google'
import { Providers } from "./providers";

const instrument = Lexend({
  subsets: ['latin'],
  fallback: ['ui_sans'],
  variable: '--font-inter',
  preload: true,
})

const playfairDisplay = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-playfair-display',
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
      <body className={`antialiased ${instrument.variable} ${playfairDisplay.variable}  font-sans`}>
        <Providers>
          <Header />
          {children}

        </Providers>
      </body>
    </html>
  )
}
