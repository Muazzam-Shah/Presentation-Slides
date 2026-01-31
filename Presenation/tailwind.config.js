/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Executive Safe Palette
        'exec-bg-primary': '#FFFFFF',
        'exec-bg-secondary': '#F5F5F7',
        'exec-bg-dark': '#0F172A',
        'exec-text-primary': '#0F172A',
        'exec-text-secondary': '#475569',
        'exec-text-inverse': '#FFFFFF',
        'exec-brand': '#8B1538',
        'exec-success': '#10B981',
        'exec-highlight': '#C9A961',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],    // Headlines only
        'manrope': ['Manrope', 'sans-serif'],          // Everything else
      },
      fontSize: {
        'exec-hero': ['5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'exec-h1': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'exec-h2': ['2.5rem', { lineHeight: '1.2' }],
        'exec-body': ['1.25rem', { lineHeight: '1.6' }],
        'exec-caption': ['0.875rem', { lineHeight: '1.5' }],
      },
      animation: {
        'slide-in': 'slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in': 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
