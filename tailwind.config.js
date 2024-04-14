/** @type {import('tailwindcss').Config} */
export default{
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}", // Include components directory
  ],
  
  theme: {
    
    extend: {
      keyframes:{
        slideUp:{
          '0%': {   opacity: 1, transform: 'translateY(80%)' },
          '50%': { opacity: 1},
          '100%':{opacity:1, transform: 'translateY(-80%)'}
        }
      },
      animation: {
        'slideUp': 'slideUp 4s linear infinite',
      },
      fontFamily:{
        'abc':['Teko','sans-serif'],
        'titleFont':['Fjalla One','sans-serif'],
        'primaryFont':['Hanken Grotesk','sans-serif']
      },
      colors:{
        selectColor: '#FDA228',
        bgPrimary: '#ED52CB',
        fgPrimary: '#080808'
      },
      
    },
  },
  plugins: [],
}