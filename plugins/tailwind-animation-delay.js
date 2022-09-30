const plugin = require("tailwindcss/plugin");

const animationDelay = plugin(
  ({ addUtilities, theme, e }) => {
    const utilities = Object.entries(theme("animationDelay")).map(([key, value]) => {
      return {
        [`.${e(`animation-delay-${key}`)}`]: { animationDelay: `${value}` },
      };
    });
    addUtilities(utilities);
  },
  {
    theme: {
      animationDelay: {
        none: "0s",
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "500ms",
        600: "600ms",
        700: "700ms",
        800: "800ms",
        900: "900ms",
        1000: "1000ms",
        1100: "1100ms",
        1200: "1200ms",
        1300: "1300ms",
        1400: "1400ms",
        1500: "1500ms",
        1600: "1600ms",
        1700: "1700ms",
        1800: "1800ms",
        1900: "1900ms",
        2000: "2000ms",
      },
    },
  },
);
module.exports = animationDelay;
