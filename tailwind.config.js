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
        scaleUp: "scaleUp 400ms ease-in-out both",
        wiggle: "wiggle 1s ease-in-out infinite",
      },

      keyframes: {
        scaleUp: {
          "0%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
