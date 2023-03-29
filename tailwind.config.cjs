/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#161eaf",

          "secondary": "#dd737a",

          "accent": "#58d0fc",

          "neutral": "#1C2931",

          "base-100": "#FFFFFF",

          "info": "#5EB3E8",

          "success": "#196B5C",

          "warning": "#A57212",

          "error": "#F8544F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
