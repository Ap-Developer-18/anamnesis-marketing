/** @type {import("tailwindcss").Config} */
const tailwind = {
  content: [
    "./app.vue",
    "./components/**/*.{vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./modules/**/*.{vue,ts}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter var", "sans-serif"],
      serif: ["Merriweather", "serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    colors: ({ colors }) => ({
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      cyan: {
        ["400"]: "#67e8f9",
        ["500"]: "#06b6d4",
        ["600"]: "#0e7490",
      },
    }),
    maxWidth: ({ theme, breakpoints }) => ({
      none: "none",
      fit: "fit-content",
      full: "100%",
      max: "max-content",
      min: "min-content",
      ...breakpoints(theme("screens")),
    }),
    aspectRatio: {
      auto: "auto",
      ["1/1"]: "1/1",
      ["1/2"]: "1/2",
      ["2/1"]: "2/1",
      ["4/3"]: "4/3",
      ["3/4"]: "3/4",
      ["16/9"]: "16/9",
      ["9/16"]: "9/16",
    },
    extend: {
      borderColor: { DEFAULT: "currentColor" },
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(300px, 1fr))",
      },
      colors: {
        "soft-peach": "#EFEFEF",
        "cloudy-grey": "#676767",
        "ice-berg": "#D9F2FF",
        "smoky-black": "#121212",
        "congress-blue": "#02428D",
      },
      backgroundImage: {
        "cerulean-blue":
          "linear-gradient(267.58deg, #0077B6 0%, #023E8A 90%, #023E8A 100%)",
        "navo-blue":
          "linear-gradient(189.58deg, #0077B6 26.46%, #023E8A 70.58%, #023E8A 90.19%)",
        "discover-blue":
          "linear-gradient(270deg, rgba(0, 119, 182, 0.65) 15%, rgba(2, 62, 138, 0.85) 40%, #023E8A 60%)",
        "linear-deep-blue":
          "linear-gradient(90deg, #0077B6 25%, #023E8A 70%, #023E8A 90%)",
        "congress-blue-mix":
          "linear-gradient(270deg, #0077B6 25%, #023E8A 70%, #023E8A 90%)",
        discover: "url(../images/webp/discover-bg.webp)",
        refer: "url(../images/webp/refer-bg.webp)",
        "plus-blue":
          "linear-gradient(96.14deg, #3A8EF6 -10.84%, #6F3AFA 196.74%)",
        hero: "url(../images/png/homepage-hero-bg.png)",
        nav: "url(../images/png/nav-bg.png)",
      },
      fontSize: {
        "custom-4xl": "40px",
        "custom-5xl": "58.36px",
        "custom-xl": "28.71px",
        "custom-2xl": "29px",
      },
      boxShadow: {
        "custom-xl":
          "0px 4px 4px 0px #0000001F inset 0px 4px 19px 0px #1678F233",
        "custom-sm": "0px 3.6px 21.6px -0.9px #00000033",
        cards: "0px 8px 17px 0px #0000001A",
      },
      lineHeight: {
        100: "100%",
        102: "102%",
        111: "111%",
        117: "117%",
        120: "120%",
        125: "125%",
        133: "133%",
        140: "140%",
        150: "150%",
        155: "155%",
      },
    },
  },
  plugins: [
    // polyfill for future pseudo selector :enter that combines :hover and :focus
    ({ addVariant }) => addVariant("enter", ["&:hover", "&:focus"]),
    // lowers specifity to allow overrides
    ({ addVariant }) => addVariant("base", "html :where(&)"),
    // style direct children
    ({ addVariant }) => addVariant("children", "& > *"),
  ],
}
module.exports = tailwind
