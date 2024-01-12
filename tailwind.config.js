/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: [`var(--font-sora)`, 'sans-serif'],
      },
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
      },
    },
  },
  plugins: [],
}
