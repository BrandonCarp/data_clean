import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      keyframes: {
        blob: {
          "0%, 100%": {
            transform: "translate(-50%, 0) scale(1)",
          },
          "33%": {
            transform: "translate(-48%, 8px) scale(1.04)",
          },
          "66%": {
            transform: "translate(-52%, -6px) scale(0.98)",
          },
        },
        blob2: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
          },
          "40%": {
            transform: "translate(10px, -8px) scale(1.03)",
          },
          "75%": {
            transform: "translate(-8px, 6px) scale(0.99)",
          },
        },
      },
      animation: {
        blob: "blob 22s ease-in-out infinite",
        blob2: "blob2 28s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
