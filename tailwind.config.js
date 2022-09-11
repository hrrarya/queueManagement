module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkmode: false,
  theme: {
    extend: {
      textColor: {
        skin: {
          base: "var(--color-text-base)",
          hover: "var(--color-text-hover-base)",
        },
      },
      backgroundColor: {
        skin: {
          base: "var(--color-bg-base)",
          hover: "var(--color-bg-hover-base)",
        },
      },
    },
    screens: {
      "2xl": { max: "1536px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1280px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1024px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "768px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "640px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
