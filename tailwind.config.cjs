/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8e00fe",
        primary_lite: "rgba(144, 0, 254, 0.8)"
      },
      fontFamily: {
      hero_text1: ['Gluten', 'Mochiy Pop One'],
      hero_text2: ['Mali', 'Mochiy Pop'],
      hero_text3: ['Jua', 'sans-serif'],
      hero_text4: ['Salsa', 'cursive'],
      hero_text5: ['Sniglet', 'cursive'],
      hero_text6: ['Baumans', 'cursive']
    }
    },
  },
  plugins: [],
};
