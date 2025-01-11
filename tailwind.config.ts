import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  
  theme: {
    extend: {
      fontFamily: {
        default: "Pragmatica",
        ffmeta: "FF Meta",
        teachers: ["Teachers", "Arial"]
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        sm: '320px', 
        md: '481px', 
        lg: '769px',
        xl: '1025px',
        '2xl': '1441px',
        '3xl': '1921px',
      },
      aspectRatio: {
        '4/3': '4 / 3'
      }
    },
  },
} satisfies Config;
