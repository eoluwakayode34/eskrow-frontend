import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand: {
          50: '#E7EFF6',
          200: '#4ECEF1',
          400: '#136ADE',
DEFAULT: '#0069FF',
        },
        primary: {
          100: '#E2EFFB',
          300:  '#8A95BF',
          400: '#0A2E6580',
          500: '#343E65',
         DEFAULT: '#0A2E65',

        },
        secondary: {
          100:  '#E4EAFF',
          DEFAULT: '#0B1A51',

        },
        

        bgColor: '#F2EDD9',
      },
    },
  },
  plugins: [],
};
export default config;
