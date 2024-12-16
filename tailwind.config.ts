// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        background: {
          DEFAULT: '#F5F5F7',
          dark: '#0a0a0a'
        },
        
        // Accent
        accent: {
          DEFAULT: '#5E5CE6',
          light: '#7A78FF',
          dark: '#4744D9',
          foreground: '#FFFFFF',
        },
        
        // Support grays
        support: {
          light: '#98989D',
          medium: '#636366',
          dark: '#48484A',
        },
        
        // Semantic colors
        semantic: {
          success: '#34C759',
          warning: '#FF9F0A',
          error: '#FF3B30',
        },
        
        ring: 'hsl(var(--ring))',
        'ring-offset': 'hsl(var(--ring-offset))',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '24px',
          lg: '48px',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1440px',
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
