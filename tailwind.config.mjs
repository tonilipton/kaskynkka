/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#121212",
        surface: "#1E1E1E",
        accent: "#C4A484",
        light: "#F5F5F5",
        muted: "#A3A3A3",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "serif"],
        sans: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        ultra: "0.2em",
      },
    },
  },
  plugins: [],
};
