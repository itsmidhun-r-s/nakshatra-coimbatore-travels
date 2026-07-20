/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#6e8aa8',
          500: '#486581',
          600: '#334e68',
          700: '#243b53',
          800: '#16263d',
          900: '#0b1a30',
          950: '#050f1f',
        },
        teal: {
          50: '#effcf6',
          100: '#c7f0db',
          200: '#90e0bd',
          300: '#52c89b',
          400: '#2db580',
          500: '#1a9268',
          600: '#137858',
          700: '#0f6047',
          800: '#0c4d3a',
          900: '#0a3d2f',
          950: '#062821',
        },
        gold: {
          50: '#fbf7ed',
          100: '#f6eccd',
          200: '#ecd794',
          300: '#e2c061',
          400: '#d9a73f',
          500: '#c8902b',
          600: '#a8701f',
          700: '#87551c',
          800: '#6e441d',
          900: '#5d391d',
        },
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(11, 26, 48, 0.15)',
        card: '0 8px 30px -12px rgba(11, 26, 48, 0.18)',
        glow: '0 0 0 4px rgba(200, 144, 43, 0.15)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 rgba(16, 185, 129, 0.5)' },
          '70%': { boxShadow: '0 0 0 14px rgba(16, 185, 129, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(16, 185, 129, 0)' },
        },
        'float-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px -8px rgba(200, 144, 43, 0.5)' },
          '50%': { boxShadow: '0 0 32px -6px rgba(200, 144, 43, 0.8)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-in': 'fade-in 0.7s ease-out both',
        'scale-in': 'scale-in 0.5s ease-out both',
        'slide-down': 'slide-down 0.3s ease-out both',
        'pulse-ring': 'pulse-ring 2s infinite',
        'float-y': 'float-y 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
