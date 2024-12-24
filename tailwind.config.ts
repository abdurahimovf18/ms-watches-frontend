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
        sm: '375px',
        md: '768px', 
        lg: '1024px',
        xl: '1280px',
        '2xl': '1600px',
      },
    },
  },
  plugins: [],
} satisfies Config;
