/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'brand-bg': '#F9F8F6',
          'brand-secondary': '#EFE9E3',
          'brand-muted': '#D9CFC7',
          'brand-accent': '#C9B59C',
        },
      },
    },
    plugins: [],
  }