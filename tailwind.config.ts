import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["var(--font-manrope)"],
        mansalva: ["var(--font-mansalva)"],
      },
      colors: {
        "main-blue": "#161827",
        red: {
          DEFAULT: "#FF4840",
        },
        slate: {
          100: "#FCFCFC",
        },
        gray: {
          DEFAULT: "#6F7782",
        },
      },
    },
  },
  plugins: [],
};
export default config;
