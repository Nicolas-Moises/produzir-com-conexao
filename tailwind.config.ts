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
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        'title-bold': 'var(--font-dm-serif-text)',
        title: 'var(--font-playfair-display)',
      },
      fontSize: {
        '4.5xl': [
          '3.5rem', '1'
        ]
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
        zinc: {
          50: '#faf7f4'
        }
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
