/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#EDE9D0',
        secondary: '#24201F'
      }
    }
  },
  plugins: ["prettier-plugin-tailwindcss"]
};