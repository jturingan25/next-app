// tailwind.config.js
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        aqua: '#00FFFF !important', // Aqua color for theme
        darkAqua: '#006F6F !important', // Dark Aqua for text and hover
      },
    },
  },
  plugins: [
    require('daisyui'), // If you're using DaisyUI
  ],
};
