/** @type {import('tailwindcss').Config} */
export default{
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}", // Include components directory
  ],
  
  theme: {
    
    extend: {
      fontFamily:{
        'abc':['Teko','sans-serif'],
        'titleFont':['Fjalla One','sans-serif']
      },
      colors:{
        selectColor: '#FDA228'
      },
      
    },
  },
  plugins: [],
}