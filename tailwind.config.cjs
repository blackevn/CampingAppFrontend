/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],

  darkMode: 'class',
  
  theme: {

    screens: {
      'sm': '440px',
      // => @media (min-width: 640px) { ... }

      'md': '667px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      height: {
        "homeCard" : "128rem",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
                    
            "primary": "#6419E6",
                    
            "secondary": "#D926A9",
                    
            "accent": "#1FB2A6",
                    
            "neutral": "#191D24",
                    
            "base-100": "#2A303C",
                    
            "info": "#3ABFF8",
                    
            "success": "#36D399",
                    
            "warning": "#FBBD23",
                    
            "error": "#F87272",
        },
      },
    ],
  },
  plugins: [
   
    require("daisyui")
   
  ]
        
}