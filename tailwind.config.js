/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4EE1A0",
      },
    },
    // container: {
    //   center: true, // Center the container

    //   screens: {
    //     sm: "600px",
    //     md: "728px",
    //     lg: "984px",
    //     xl: "1240px",
    //   },
    // },
  },
  plugins: [],
};
