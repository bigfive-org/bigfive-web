import { nextui } from '@nextui-org/theme';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-geist-mono)']
      },
      keyframes: {
        heartbeat: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' }
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' }
        },
        'shadow-pulse': {
          '0%': { transform: 'scale(1)', boxShadow: '0 0 0 0 #006FEE' },
          '70%': {
            transform: 'scale(1.02)',
            boxShadow: '0 0 0 10px rgba(229, 62, 62, 0)'
          },
          '100%': { transform: 'scale(1),' }
        }
      },
      animation: {
        heartbeat: 'heartbeat 1s ease-in-out infinite',
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'shadow-pulse': 'shadow-pulse 3s infinite'
      }
    }
  },
  darkMode: 'class',
  plugins: [nextui()]
};
