/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export const content = [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
];

export const theme = {
  extend: {
    fontFamily: {
      mulish: "var(--font-mulish)",
    },
    colors: {
      primary: {
        light: '#6D83F2',
        DEFAULT: '#0055a5',
        dark: '#013465',
      },
      secondary: {
        light: '#FFC47D',
        DEFAULT: '#FF9E44',
        dark: '#CC7B35',
      },
      neutral: {
        light: '#F3F4F6',
        DEFAULT: '#D1D5DB',
        dark: '#374151',
      },
      accent: {
        light: '#EFC7F6',
        DEFAULT: '#D061E3',
        dark: '#A246B1',
      },
      white: {
        light: '#E7E7E7',
        DEFAULT: '#FFFFFF',
        dark: '#E7E7E7'
      }
    },
    borderRadius: {
      '50': '50px'
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      "keyfact-img": "url('/key-fact.jpg')",
      "machine": "url('/machine.png')",
      "slider-one": "url('/slider/slider-img-1.jpg')",
    },
  },
};

export const plugins = [
  plugin(function ({ addBase, addComponents, addUtilities }) {
    addBase({});
    addComponents({
      ".container": {
        "@apply max-w-[77.5rem] mx-auto px-5": {},
      },
      ".h1": {
        "@apply font-mulish font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]": {},
      },
      ".h2": {
        "@apply font-mulish text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight": {},
      },
      ".h3": {
        "@apply font-mulish text-[2rem] leading-normal md:text-[2.5rem]": {},
      },
      ".h4": {
        "@apply font-mulish text-[2rem] leading-normal": {},
      },
      ".h5": {
        "@apply font-mulish text-2xl leading-normal": {},
      },
      ".h6": {
        "@apply font-mulish font-semibold text-lg leading-8": {},
      },
      ".body-1": {
        "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8": {},
      },
      ".body-2": {
        "@apply font-mulish font-medium text-[0.875rem] leading-6 md:text-[0.938rem]": {},
      },
      ".caption": {
        "@apply text-sm": {},
      },
      ".quote": {
        "@apply  text-lg leading-normal": {},
      },
      ".button": {
        "@apply font-mulish text-2xl font-normal capitalize tracking-wider": {},
      },
    });
    addUtilities({
      ".tap-highlight-color": {
        "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
      },
    });
  }),
];
