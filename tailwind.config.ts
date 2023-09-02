import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
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
      colors: {
        zinc: {
          50: '#faf7f4'
        }
      }
    },
  },
  plugins: [],
}
export default config
