/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1DA1F2', // Example primary color
        secondary: '#14171A', // Example secondary color
      },
      spacing: {
        '128': '32rem', // Example custom spacing
      },
      borderRadius: {
        '4xl': '2rem', // Example custom border radius
      },
    },
  },
  plugins: [],
};
