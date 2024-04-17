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
          100: "#B3B3B3",
          200: "#F7F7F7",
          900: "#101828",
        },
        green: {
          DEFAULT: "#4CA90C",
        },
        yellow: {
          DEFAULT: "#FCE28C",
          100: "#EBB22F",
        },
        black: {
          DEFAULT: "#000000",
          100: "#4C4C4C",
        },
      },
    },
  },
  plugins: [],
};
export default config;
