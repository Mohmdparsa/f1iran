/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'orange-yellow-gradient': 'linear-gradient(to right, #FFA500, #FFD700)',
      },
      
    },
  },
  plugins: [],
  corePlugins: {
    direction: true,
  },
}

