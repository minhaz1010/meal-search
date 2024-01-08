/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#00aaff",
        
"secondary": "#009e52",
        
"accent": "#0000ff",
        
"neutral": "#030407",
        
"base-100": "#fff",
        
"info": "#00c6ff",
        
"success": "#06ab00",
        
"warning": "#e96400",
        
"error": "#ff8fa5",
        },
      },
    ],
  },


  plugins: [require("daisyui")],
}