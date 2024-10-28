/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "fade-in": "fade-in 0.5s  ease-in-out",
        "fade-out": "fade-out 0.5s ease-in-out",
        "scale-up": "scale-up 0.4s ease-out",
        "pulse-new": "pulse-new 2.5s infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0,
            // transform: "translate3d(0, 100%, 0)",
          },
          "100%": {
            opacity: 1,
            // transform: "translate3d(0, 0%, 0)",
          },
        },
        "fade-out": {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        "scale-up": {
          "0%": {
            scale: 0,
          },
          "100%": {
            scale: 1,
          },
        },
        "pulse-new": {
          "0%": {
            opacity: 0.3,
          },
          "50%": {
            opacity: 0.6,
          },
          "100%": {
            opacity: 0.3,
          },
        },
      },
    },
  },
  plugins: [],
};
