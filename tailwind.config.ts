import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
      opensans: ['Open Sans', 'sans-serif'],
      indie: ['Indie Flower', 'cursive'],
    },
    colors: {
      mainColor: 'rgb(221, 184, 179)',
      bgColor: '#f7f7f7',
      accentColor: 'rgba(255, 108, 0, 1)',
      cardColor: '#000',
      textColor: '#555555',
      textColorDarkBg: '#9DA4BD',
      mainLightColor: '#fff',
      mainDarkColor: '#303030',
      transparent: 'transparent',
      error: '#D2042D',
    },
  },
  plugins: [],
};
export default config;
