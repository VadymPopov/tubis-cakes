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
      primary: '#efc3ff',
      secondary: '#ffeb76',
      mint: '#A6EAFF',
      mintAccent: '#65bdff',
      peach: '#FFB4D5',
      accentColor: '#ff74b1',
      mainLightColor: '#fff',
      mainDarkColor: '#303030',
      transparent: 'transparent',
      error: '#D2042D',
    },
  },
  plugins: [],
};
export default config;
