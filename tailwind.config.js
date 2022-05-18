module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "theme": ['"Titillium Web"', "sans-serif"],
      },
      colors: {
        "theme-light": "#EDEFEE",
        "theme-dark": "#1C292C",
      },
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.81,0.29,0.06,0.94)",
        "out-expo": "cubic-bezier(0.81,0.29,0.06,0.94)",
      },
    },
  },
  plugins: [],
};
