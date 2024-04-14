export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}", // Include components directory
  ],
  
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' }
        },
        typewriter: {
          to: {
            left: "100%"
          },
          blink: {
            '0%': {
              opacity: '0',
            },
            '0.1%': {
              opacity: '1',
            },
            '50%': {
              opacity: '1',
            },
            '50.1%': {
              opacity: '0',
            },
            '100%': {
              opacity: '0',
            },
          }
        }
      },
      animation: {
        slideUp: 'slideUp 4s linear infinite',
        typewriter: "typewriter 2s steps(11) forwards",
        caret: 'typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s'
      },
      fontFamily: {
        'abc': ['Teko', 'sans-serif'],
        'titleFont': ['Fjalla One', 'sans-serif'],
        'primaryFont': ['Hanken Grotesk', 'sans-serif']
      },
      colors: {
        selectColor: '#FDA228',
        bgPrimary: '#ED52CB',
        fgPrimary: '#080808'
      },
    },
  },
  plugins: [],
}
