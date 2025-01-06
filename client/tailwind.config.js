/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        michael_red_100: "#DC2828",
        michael_red_50: "#DC282880",
        michael_red_20: "#DC282833",
        michael_red_10: "#DC28281A",
        michael_dark_red_50: "#4F131380",
        michael_dark_red_75: "#4F1313BF",
        michael_black_1: "#181A2A",
        michael_black_2: "#3B3C4A",
        michael_black_3: "#161722",
        michael_gray_1: "#696A75",
        michael_gray_2: "#D9D9D9",
        michael_gray_3: "#535353",
        michael_gray_4: "#AAAAAA",
        michael_gray_5: "#6B6B6B",
        michael_gray_6: "#B1B1B142",
        michael_gray_7: "#97989F",
        michael_bg: "#F5F7FA",
      },
    },
  },
  plugins: [],
}
