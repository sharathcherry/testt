// tailwind.config.js

import { defineConfig } from 'tailwindcss';

export default defineConfig({
  // The 'content' key is still important for production builds
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#2563eb',
          dark: '#3b82f6',
        },
        accent: {
          DEFAULT: '#10b981',
          dark: '#34d399',
        },
        light: {
          background: '#f9fafb',
          card: '#ffffff',
          text: '#1f2937',
        },
        dark: {
          background: '#111827',
          card: '#1f2937',
          text: '#f9fafb',
        }
      },
      animation: {
        'scroll-text': 'scroll-text 40s linear infinite',
      },
      keyframes: {
        'scroll-text': {
          'from': { transform: 'translateX(100%)' },
          'to': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
});