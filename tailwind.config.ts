/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F3D2E',
          dark: '#0A2820',
          light: '#134E3A',
        },
        secondary: {
          DEFAULT: '#D9E3D3',
          light: '#E5EFE0',
          dark: '#C1D4B5',
        },
        beige: {
          DEFAULT: '#F9F8F6',
          light: '#FCFBFA',
          dark: '#F0EFE9',
        },
        mint: {
          DEFAULT: '#D9E3D3',
          light: '#E8F0E3',
          dark: '#C8D8BC',
        }
      },
      backgroundColor: {
        'body': '#F9F8F6',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(15, 61, 46, 0.08)',
        'soft-lg': '0 4px 16px rgba(15, 61, 46, 0.10)',
        'soft-xl': '0 8px 24px rgba(15, 61, 46, 0.12)',
        'layered': '0 2px 4px rgba(15, 61, 46, 0.06), 0 8px 16px rgba(15, 61, 46, 0.08)',
      },
      borderRadius: {
        'card': '16px',
        'card-lg': '20px',
      },
      fontSize: {
        'hero-mobile': ['36px', { lineHeight: '1.2' }], // 72% dari desktop
        'hero-laptop': ['42px', { lineHeight: '1.2' }], // 84% dari desktop
        'hero-desktop': ['50px', { lineHeight: '1.2' }], // 100% desktop
      },
    },
  },
  plugins: [],
}
