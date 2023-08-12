/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E6F8FE",
          100: "#CEF1FD",
          200: "#97E1FB",
          300: "#66D2FA",
          400: "#30C3F8",
          500: "#08AEEA", // brand
          600: "#068BBB",
          700: "#056A8F",
          800: "#03465E",
          900: "#022531",
          950: "#011219",
        },
        secondary: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B6",
          400: "#34D399", // brand
          500: "#10B981",
          600: "#059668",
          700: "#047856",
          800: "#065F46",
          900: "#064E3B",
          950: "#022c22",
        },
        error: "#f87272",
        success: "#36d399",
      },
    },
  },
};
