/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "15": '15px'
      },
      fontFamily: {
        sans: '"Manrope", sans-serif',
      },
      backgroundImage: {
        pattern: "url('src/assets/bg-pattern.svg')",
        circles: 'url(src/assets/pattern-circles.svg)'
      },
      colors: {
        "soft-cyan": 'hsl(174, 77%, 80%)',
        "strong-cyan": 'hsl(174, 86%, 45%)',
        "light-grayish-red": 'hsl(14, 92%, 95%)',
        "light-red": 'hsl(15, 100%, 70%)',
        "pale-blue": 'hsl(226, 100%, 87%)',
        "white": 'hsl(0, 0%, 100%)',
        "very-pale-blue": 'hsl(230, 100%, 99%)',
        "light-grayish-blue": 'hsl(224, 65%, 95%)',
        "medium-grayish-blue": 'hsl(223, 50%, 87%)',
        "grayish-blue": 'hsl(225, 20%, 60%)',
        "dark-desaturated-blue": 'hsl(227, 35%, 25%)',
      }
    },
  },
  plugins: [],
}

