/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
      backgroundImage: {
        "gradient-text": "linear-gradient(45deg, #a1c4fd, #c2e9fb)", // Customize your gradient here
      },
      backgroundClip: {
        text: "text",
      },
    },
  },
  plugins: [],
};
