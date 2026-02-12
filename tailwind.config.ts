// tailwind.config.js
module.exports = {
  // ... your existing config
  plugins: [
    // ... your other plugins
    require("tailwindcss-animate"),
  ],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "402px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-satoshi)", "system-ui", "sans-serif"],
      },
      colors: {
        "light-teal": "var(--light-teal)",
        "light-orange": "var(--light-orange)",
      },
    },
  },
};
