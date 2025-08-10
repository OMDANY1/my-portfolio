import type { Config } from 'tailwindcss'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const typography = require('@tailwindcss/typography')

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: { center: true, padding: '1rem' },
    },
  },
  plugins: [typography],
}
export default config
