/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1024px',
      lg: '1280px',
      xl: '1536px',
    },
    extend: {
      maxWidth: {
        content: '1240px',
      },
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        void: 'var(--ink-900)',
        ink: 'var(--ink-950)',
        navy: 'var(--ink-900)',
        charcoal: 'var(--ink-800)',
        'blue-tint': 'var(--ink-800)',
        brand: 'var(--red-600)',
        line: 'var(--border)',
        muted: 'var(--steel-300)',
        'muted-deep': 'var(--steel-500)',
        accent: 'var(--red-600)',
        'accent-soft': 'var(--red-500)',
        'accent-deep': 'var(--red-700)',
        champagne: 'var(--champagne-400)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        stat: ['var(--font-stat)', 'sans-serif'],
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        lift: 'var(--shadow-lift)',
        glow: 'var(--shadow-glow)',
      },
      transitionTimingFunction: {
        premium: 'var(--ease)',
      },
    },
  },
  plugins: [],
};
