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
        geist: ["var(--geist)", "teachers"]
      },
      fontWeight: {
        "geist-300": "300",
        "geist-400": "400",
        "geist-500": "500",
        "geist-600": "600",
        "geist-700": "700",
        "geist-800": "800",
        "geist-900": "900",
      },
      colors: {
        light: "var(--light)",
        dark: "var(--dark)",
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
