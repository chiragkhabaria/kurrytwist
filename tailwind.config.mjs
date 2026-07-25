/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Premium editorial color palette - warm, minimal, elegant
        cream: {
          50: '#fdfcfb',
          100: '#faf8f5',
          200: '#f5f3ef',
          300: '#efeee9',
          400: '#e5e3dc',
          500: '#d9d6cd',
        },
        sage: {
          50: '#f6f7f4',
          100: '#e8ebe4',
          200: '#d4daca',
          300: '#b5c2a9',
          400: '#93a682',
          500: '#778a66',
        },
        terracotta: {
          50: '#fdf7f5',
          100: '#fae8e3',
          200: '#f5d4cb',
          300: '#ebb8a7',
          400: '#d99278',
          500: '#c87556',
        },
        charcoal: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#717171',
          500: '#4a4a4a',
          600: '#2d2d2d',
          700: '#1a1a1a',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      },
      maxWidth: {
        'reading': '65ch',
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
          },
        },
      },
    },
  },
  plugins: [],
}
