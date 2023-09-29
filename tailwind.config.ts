import type { Config } from 'tailwindcss'

import { nextui } from "@nextui-org/react"

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {

    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: 'var(--font-lexend)',
        title: 'var(--font-familjen-grotesk)',
      },
      keyframes: {
        scaleIn: {
          from: { opacity: '0', transform: 'rotateX(-10deg) scale(0.9)' },
          to: { opacity: '1', transform: 'rotateX(0deg) scale(1)' },
        },
      },
      animation: {
        scaleIn: 'scaleIn 300ms ease',
      },
      colors: {
        primary: '#ffd470',
        secondary: '#FF90E8',
        tertiary: '',
        'background-light': '#f7f5f2',
        zinc: {
          50: '#faf7f4'
        },
        pink: {
          100: '#f3e2e6',
          200: '#F3E2E6',
          300: '#F0AAB4',
          400: '#FF738C',
          500: '#FE2B8F',
          600: '#FF4478',
          700: '#C8195A',
          800: '#78003C',
          900: '#3C2D37',
        },
      }
    },
  },
  darkMode: "class",
  plugins: [nextui(
    {
      themes: {
        light: {
          colors: {
            primary: "#F34A0D",
            secondary: "#FF90E8",
          },
        },
      },
    }
  )]
}

export default config
