/** @type {import('tailwindcss').Config} */
const object = (limit, base = 16) => {
  return {
    ...[...Array(limit + 1)].reduce((object, _, index) => {
      object[`${index}`] = `${index / base}rem`;
      return object;
    }, {}),
  };
};

module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    spacing: object(200),
    colors: {
      default: "#1a1a1a",
      white: "#ffffff",
      black: "#000000",
    },
    fontFamily: {
      sans: ["Helvetica Neue", "Arial", "Hiragino Kaku Gothic ProN", "Hiragino Sans", "Meiryo", "sans-serif"],
      serif: ["Oswald", "sans-serif"],
    },
    fontSize: object(80),
    fontWeight: {
      bold: 700,
      semibold: 600,
      medium: 500,
      normal: 400,
      light: 300,
    },
    lineHeight: {
      xl: 2,
      lg: 1.8,
      md: 1.5,
      sm: 1.2,
      xs: 1,
    },
    extend: {
      screens: {
        pc: { raw: "all and (max-width: 1365px)" },
        tb: { raw: "only screen and (max-width: 1023px)" },
        sp: { raw: "only screen and (max-width: 767px)" },
        print: { raw: "print" },
      },
    },
  },
  plugins: [],
};
