import { nextui } from '@nextui-org/react';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    'src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Onest', ...defaultTheme.fontFamily.serif],
        'max-sm': {'max': '640px'}, 
        'max-lg': {'max': '1023px'},
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
