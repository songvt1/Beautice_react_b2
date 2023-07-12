/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pinkColor: "#ff64ae",
        grayColor: "#8b8b8b",
        blueColor: "#091156",
        whiteColor: "#ffffff",
      },
    },
  },
  plugins: [],
};
