export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        // Claude-inspired coral/terracotta primary
        primary: {
          50:  '#fdf3ef',
          100: '#fde4d9',
          200: '#fbc8b3',
          300: '#f7a384',
          400: '#f07d56',
          500: '#d97757',  // Claude signature coral
          600: '#c96b47',
          700: '#a8533a',
          800: '#8a4331',
          900: '#72392b',
          950: '#3d1c16',
        },
        // Warm sand secondary
        secondary: {
          50:  '#faf8f4',
          100: '#f5f0e8',
          200: '#eae1d0',
          300: '#d9ccb4',
          400: '#c4b090',
          500: '#b09672',
          600: '#9a7e5a',
          700: '#7f674a',
          800: '#685640',
          900: '#574839',
          950: '#2e241c',
        },
        // Claude warm brown text tones
        claude: {
          50:  '#f9f7f5',
          100: '#f0ebe4',
          200: '#e0d5c8',
          300: '#c9b9a6',
          400: '#b09a84',
          500: '#967f68',
          600: '#7d6858',
          700: '#67564a',
          800: '#554841',
          900: '#3d3530',
          950: '#1a1714',  // near-black warm
        },
        // Warm linen background
        linen: {
          50:  '#faf8f5',
          100: '#f4f0e8',
          200: '#ede8dd',
          300: '#e0d9cc',
          400: '#cfc5b4',
          500: '#bdb09f',
          600: '#a8997f',
          700: '#8d7f69',
          800: '#74695a',
          900: '#5f564d',
          950: '#322e29',
        },
        // Warm charcoal dark mode
        dark: {
          950: '#0f0e0c',
          900: '#1c1a17',  // Claude dark bg
          800: '#2a2723',
          700: '#3d393390',
          600: '#504c46',
          500: '#6b655e',
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "bounce-slow": "bounce 3s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "blob": "blob 7s infinite",
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
        blob: {
          "0%":   { transform: "translate(0px,0px) scale(1)" },
          "33%":  { transform: "translate(30px,-50px) scale(1.1)" },
          "66%":  { transform: "translate(-20px,20px) scale(0.9)" },
          "100%": { transform: "translate(0px,0px) scale(1)" },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
