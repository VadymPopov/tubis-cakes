import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--font-roboto-mono)'],
        comfortaa: ['var(--font-comfortaa)'],
      },
      colors: {
        primary: '#efc3ff',
        secondary: '#fff9e9',
        third: '#ffe6ee',
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
  },
  plugins: [],
};

export default config;
