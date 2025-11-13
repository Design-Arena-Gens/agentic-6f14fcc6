import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2e7d32',
          light: '#60ad5e',
          dark: '#005005'
        }
      }
    },
  },
  plugins: [],
} satisfies Config
