export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f4f9f3',
          100: '#eef6ec',
          200: '#deeddb',
          300: '#c3dec0',
          400: '#a5c89e', // Sage
          500: '#83ad7b',
          600: '#648e5d',
          700: '#50724b',
          800: '#415b3e',
          900: '#364b34',
          950: '#1d2a1c',
        },
        secondary: {
          50: '#fcffe6',
          100: '#f9ffc5',
          200: '#f3ff94',
          300: '#e9ff57',
          400: '#dafa20',
          500: '#bce004',
          600: '#94b300',
          700: '#708800',
          800: '#5a6b06',
          900: '#4b590b',
          950: '#283101',
        },
        accent: {
          50: '#f5f7f3',
          100: '#e8ede4',
          200: '#d0dcc8',
          300: '#abc29d',
          400: '#84a273',
          500: '#648552',
          600: '#4f6a41',
          700: '#5c6b45', // Olive/Earth
          800: '#36462d',
          900: '#2d3a26',
          950: '#172013',
        },
        cream: {
          50: '#fefce8', // Cream Background
          100: '#fffbeb',
          200: '#fef3c7',
        },
        dark: {
          900: '#1c1917', // Warm Black
          800: '#292524',
          700: '#44403c',
        }
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "bounce-slow": "bounce 3s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
