/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        phil: "rgba(255, 155, 27, 1)",
        deric: { light: "#ff4572" },
      },
      width: {
        dericSize: "50%",
      },
    },
  },
  plugins: [],
};
