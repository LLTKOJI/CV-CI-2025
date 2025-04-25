module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        secondary: 'rgb(var(--secondary) / <alpha-value>)',
        highlight: 'rgb(var(--highlight) / <alpha-value>)',
        dark: {
          bg: 'rgb(var(--dark-bg) / <alpha-value>)'
        }
      }
    }
  },
  safelist: [
    {
      pattern: /(text|bg|border)-\[var\(--(primary|secondary|highlight|dark-bg)\)\]/,
    },
    'text-primary',
    'bg-primary',
    'border-primary',
    'hover:bg-primary',
    'bg-dark-bg',
    'text-dark-bg'
  ],
  plugins: [],
}