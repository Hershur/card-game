module.exports = {
  purge: ['./src/**/*.ts', './src/**/*.tsx', './src/**/*.js', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        monospace: ['Courier Prime'],
        cursive: ['Alfa Slab One'],
      },
      colors: {
        'leaf-green': '#0A863E',
        'light-yellow': '#FFF48C',
        'yellow-shade': '#EFCE4B',
        'orange-shade': '#ED973E',
      },
      screens: {
        'small-phone': '300px',
        'mobile-phone': '480px',
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px',
      },
      keyframes: {
        'from-top': {
          '0%': { transform: 'translateY(-1000px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'from-top2': {
          '0%': { transform: 'translateY(-1000px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'from-top3': {
          '0%': { transform: 'translateY(-1000px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'from-top4': {
          '0%': { transform: 'translateY(-1000px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        'from-top5': {
          '0%': { transform: 'translateY(-1000px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        'from-top': 'from-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'from-top2': 'from-top 0.8s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'from-top3': 'from-top 1.1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'from-top4': 'from-top 1.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'from-top5': 'from-top 1.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
      },
      translate: {
        'transform-winner': 'translateX(5rem) translateY(10rem)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
