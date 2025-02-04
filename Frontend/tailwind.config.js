/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ensure all relevant files are scanned
  ],
  theme: {
    extend: {
      colors: {
        primary: "#db7bc3", // Custom color
      },
      gridTemplateColumns: {
        'auto': "repeat(auto-fill, minmax(200px, 1fr))", // Custom grid template
      },
    },
  },
  plugins: [],
};
