import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        background: '#F5F5F7',
        accent: '#5E5CE6',
        // Support Colors
        gray: {
          100: '#F5F5F7',
          200: '#E5E5EA',
          300: '#D1D1D6',
          400: '#C7C7CC',
          500: '#98989D',
          600: '#636366',
          700: '#48484A',
          800: '#3A3A3C',
          900: '#2C2C2E',
        },
        // Semantic Colors
        success: '#34C759',
        warning: '#FF9F0A',
        error: '#FF3B30',
      },
      fontSize: {
        // Typography Scale from Phase 1
        '4xs': ['12px', '1.5'],    // Body Scale
        '3xs': ['13px', '1.5'],
        '2xs': ['14px', '1.5'],
        'xs': ['16px', '1.5'],
        'sm': ['18px', '1.2'],     // Heading Scale
        'base': ['20px', '1.2'],
        'lg': ['24px', '1.2'],
        'xl': ['32px', '1.2'],
        '2xl': ['40px', '1.2'],
      },
      spacing: {
        // Spacing System from Phase 1
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
      },
      maxWidth: {
        container: '1440px',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['SF Pro Display', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
