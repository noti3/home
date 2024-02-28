import type { Config } from 'tailwindcss'
import daisyui from 'daisyui/src/theming/themes'

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/container-queries'), require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          ...daisyui['light'],
          primary: '#ff6c61',
          'primary-content': '#4e4351',
          secondary: '#ff6c61',
          'secondary-content': '#dbd2d1',
        },
      },
      {
        dark: {
          ...daisyui['dark'],
          primary: '#ff6c61',
          'primary-content': '#dbd2d1',
          secondary: '#ff6c61',
          'secondary-content': '#4e4351',
        },
      },
    ],
  },
}

export default config
