/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Glory', 'system-ui', 'sans-serif'],
      },
      colors: {
        "caio-red": "red",
        "gray-hover": "#fafafa",
        "gray-light": "#f5f5f5",
        white: "#ffffff",
        "alexandria-primary":
          "linear-gradient(136deg, #034694 -3.26%, #7C51A1 26.43%, #EA5B30 56.13%, #FAA61A 85.83%, #FFF200 115.52%)",
        "alexandria-secondary-gradient":
          " linear-gradient(90deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)",
        ring: "#034694",
        border: "#B3B3B3",
        input: "#1A1A1A",
        "input-placeholder": "#666666",
      },
      backgroundImage: {
        "alexandria-primary":
          "linear-gradient(136deg, #034694 -3.26%, #7C51A1 26.43%, #EA5B30 56.13%, #FAA61A 85.83%, #FFF200 115.52%)",
        "alexandria-secondary-gradient":
          " linear-gradient(90deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)",
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "fade-left": {
          "0%": { opacity: "0", transform: "translateX(16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-right": {
          "0%": { opacity: "0", transform: "translateX(-16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-up": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.5)" },
        },
      },
      animation: {
        "fade-in": "fade-in 300ms ease-out both",
        "fade-out": "fade-out 300ms ease-in both",
        "fade-left": "fade-left 400ms ease-out both",
        "fade-right": "fade-right 400ms ease-out both",
        "scale-up": "scale-up 500ms ease-out both",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
        6: "6",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },
    },
  },
  plugins: [],
};
