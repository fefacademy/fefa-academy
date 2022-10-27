module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#228be6",
        },
      },
      fontFamily: {
        roboto:
          "'Roboto Slab', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        robotoBold:
          "'Roboto Slab Bold', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        Inter: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        cursive: "Courgette, cursive",
      },
    },
  },
  plugins: [],
};
