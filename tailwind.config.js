/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        chillax: "Chillax",
        "satoshi-light": "Satoshi-Light",
        "satoshi-regular": "Satoshi-Regular",
      },
      colors: {
        "cod-gray": "#1A1A1A",
        "cod-gray-1": "#1E1E1E",
        "t-light": "#F4F2ED",
        sundance: "#CEBD63",
      },
    },
  },
  plugins: [],
};
