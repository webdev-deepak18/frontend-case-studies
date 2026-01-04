/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#9E77ED',
          hover: '#8B63E6',
          subtle: '#F4EEFF',
        },
        gray: {
          900: '#111827',
          700: '#374151',
          600: '#717680', 
          500: '#8A8F98',
          400: '#AEB3BA',
          300: '#D1D5DB',
          200: '#E5E7EB',
          100: '#F3F4F6',
          50: '#F9FAFB',
        },
      },
    },
  },
  plugins: [],
}
