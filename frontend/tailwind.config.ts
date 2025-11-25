import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      // colors: {
      //   gray: {
      //     darkest: "#0f0f0fff",
      //     dark: "#1C1C1C",
      //     light: "#DADADA",
      //     lightest: "#F5F5F5",
      //   },
      //   purple: {
      //     main: "#B582F4",
      //   },
      // },
    },
  },
  plugins: [],
};
export default config;
