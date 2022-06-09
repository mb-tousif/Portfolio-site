module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4A707A",
          secondary: "#7697A0",
          accent: "#94B0B7",
          neutral: "#C2C8C5",
          "base-100": "#ffffff",
          "base-200": "#DDDDDA",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
