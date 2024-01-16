/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#1e293b",
        third: "#334155",
        forth: "#cbd5e1",
        primaryText: "#14b8a6"
      },
    },
  },
  plugins: [],
}

