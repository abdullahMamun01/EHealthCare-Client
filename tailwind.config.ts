import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'doccure-darkBlue': '#1D3A70', // Use your actual hex/rgb/oklch color here
      },
    },
  },
  plugins: [],
} satisfies Config;
