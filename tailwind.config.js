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
        "roboto-mono": `'Roboto Mono', monospace`,
      },
      colors: {
        "cod-gray": "#1A1A1A",
        "cod-gray-1": "rgba(255, 255, 255, 0.05)",
        "cod-gray-2": "rgba(255, 255, 255, 0.03)",
        "t-light": "#F4F2ED",
        "t-gray": "rgba(244,242,237,.6)",
        sundance: "#CEBD63",
      },
    },
  },
  plugins: [],
};
