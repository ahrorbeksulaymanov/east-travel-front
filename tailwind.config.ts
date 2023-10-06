import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '24': 'repeat(24, minmax(0, 1fr))',
      }

    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 992px) { ... }

      'xl': '1300px',
      // => @media (min-width: 1200px) { ... }

      'xxl': '1365px',
    },
  },

  plugins: [],
}
export default config