/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Use 'Inter Display' not 'Inter'
        'inter': ['Inter Display', 'system-ui', 'sans-serif'],
        'montserrat': ['Montserrat', 'Inter Display', 'sans-serif'],
        'jetbrains': ['JetBrains Mono', 'monospace'],
        
        // Optional shortcuts
        'display': ['Inter Display', 'system-ui', 'sans-serif'],
        'body': ['Inter Display', 'system-ui', 'sans-serif'],
        'heading': ['Montserrat', 'Inter Display', 'sans-serif'],
      },
    },
  },
  plugins: [],
}