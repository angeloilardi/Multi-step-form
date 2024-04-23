import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'marine-blue': 'hsl(213,96%,18%)',
        'purplish-blue': 'hsl(243,100%,62%)',
        'pastel-blue': 'hsl(228,100%,84%)',
        'light-blue': 'hsl(206,94%,87%)',
        'strawberry-red': 'hsl(354,84%,57%)',
        'cool-gray': 'hsl(231,11%,63%)',
        'light-gray': 'hsl(229,24%,87%)',
        'magnolia':' hsl(217,100%,97%)',
        'alabaster': 'hsl(231,100%,99%)'
      }
    },
  },
  plugins: [nextui()],
};
export default config;
