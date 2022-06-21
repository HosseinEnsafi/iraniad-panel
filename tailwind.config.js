/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        sidebar: "-1px 0px 10px 1px #aaaaaa",
      },
      backgroundColor: {
        backdrop: "#292a3393",
      },

      animation: {
        "scale-up":
          "animation: scale-up 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
      },

      keyframes: {
        "scale-up": {
          "0%": { transform: "scale(0.5)" },
          "100%": { transform: "scalse(1)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
