/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#EEEEEE",
        bl: "#00ADB5",
        scdblk: "#393E46",
        blk: "#222831",
      },
    },
  },
  plugins: [],
};
