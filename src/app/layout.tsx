import { Header } from '@/components/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Playfair_Display } from 'next/font/google'
import { DM_Serif_Text } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  fallback: ['ui_sans'],
  variable: '--font-inter',
  preload: true,
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
  preload: true,
})

const dmSerifText = DM_Serif_Text({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-dm-serif-text',
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
    <html lang="en">
      <body className={`antialiased ${inter.variable} ${playfairDisplay.variable} ${dmSerifText.variable} font-sans`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
