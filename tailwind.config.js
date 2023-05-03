/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        brand: "url('/assets/banner_image.png')",
      },
    },
    extend: {
      colors: {
        100: "#E6C744",
        200: "#FFFFFF",
        300: "#000000",
        400: "#C2C8DA",
        450: "#F4F6F5",
        500: "#242323",
        550: "#191818",
      },
    },
  },
  plugins: [],
};
