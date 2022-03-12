module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#85C7F2",
          secondary: "#F68E5F",
          accent: "#F5DD90",
          neutral: "#191D24",
          "base-100": "#4C4C4C",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F76C5E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
