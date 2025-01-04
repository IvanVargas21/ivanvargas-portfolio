/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'green-glow': '2px 13px 25px -2px rgba(72, 222, 128, 0.74)',
      },
      fontFamily: {
        bebas: ['Bebas Neue', 'sans-serif'],
      },
      animation: {
        "spin-slow": "spin 10s linear infinite", // Adjust duration as needed
      },
      screens: {
        '3xl': '1920px', // 1920px breakpoint
        '4xl': '2300px',  // Custom breakpoint for screens larger than 2300px
      },
      maxWidth: {
        '8xl': '96rem', // 1536px
        '9xl': '112rem', // 1792px
        '10xl': '128rem', // 2048px
        '11xl': '144rem',  // New custom width for larger screens
      },
      fontSize: {
        '10xl': '12rem', // Example for larger font size (192px)
        '11xl': '14rem', // Example for even larger font size (224px)
        // Add more sizes as needed
      },
      height: {
        '10xl': '100rem', // You can adjust this value to your desired height
        '11xl': '120rem', // Another custom height value
        '12xl': '150rem', // Another custom height value
      },
    },
  },
  plugins: [],
}

