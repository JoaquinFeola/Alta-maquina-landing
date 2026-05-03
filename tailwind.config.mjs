/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Modo Claro - Gris Minimal Moderno (gray-50 a gray-900)
        light: {
          bg: '#ffffff',
          'bg-secondary': '#f9fafb',
          text: '#111827',
          'text-secondary': '#6b7280',
          border: '#e5e7eb',
        },
        // Modo Oscuro - Slate (slate-700 a slate-100)
        dark: {
          bg: '#0f172a',
          'bg-secondary': '#1e293b',
          text: '#f1f5f9',
          'text-secondary': '#94a3b8',
          border: '#334155',
        },
        // Acento - Blue profesional
        primary: '#2563eb',
        'primary-hover': '#1d4ed8',
        secondary: '#0f172a',
        accent: '#3b82f6',
        'accent-hover': '#60a5fa',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#111827',
          },
        },
        dark: {
          css: {
            color: '#f1f5f9',
          },
        },
      },
    },
  },
  plugins: [],
};