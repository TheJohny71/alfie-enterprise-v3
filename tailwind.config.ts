import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        teal: {
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
        },
        purple: {
          500: '#8B5CF6',
          600: '#6D5AE6',
          900: '#5B21B6',
        },
        gray: {
          950: '#030712',
          900: '#111827',
          800: '#1F2937',
          700: '#374151',
          400: '#9CA3AF',
          300: '#D1D5DB',
        },
        background: {
          DEFAULT: '#F5F5F7',
          dark: '#0a0a0a'
        },
        accent: {
          DEFAULT: '#5E5CE6',
          light: '#7A78FF',
          dark: '#4744D9',
          foreground: '#FFFFFF',
        },
        support: {
          light: '#98989D',
          medium: '#636366',
          dark: '#48484A',
        },
        semantic: {
          success: '#34C759',
          warning: '#FF9F0A',
          error: '#FF3B30',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '24px',
        '3xl': '32px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
