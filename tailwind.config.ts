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
        "main-blue": { DEFAULT: "#101828", 100: "#161827" },
        red: {
          DEFAULT: "#FF4840",
          100: "#FF4B40",
        },
        slate: {
          100: "#FCFCFC",
          200: "#F7F7F7",
          300: "#F2F2F2",
          400: "#E6E6E6",
        },
        gray: {
          DEFAULT: "#6F7782",
          3: "#828282",
          100: "#B3B3B3",
          300: "#8A8B93",
          400: "#8E8B8B",
          800: "#1D2939",
          900: "#98A2B3",
        },
        green: {
          DEFAULT: "#4CA90C",
        },
        yellow: {
          DEFAULT: "#FCE28C",
          100: "#EBB22F",
          200: "#FFCB21",
          300: "#FFF5d4",
        },
        black: {
          DEFAULT: "#000000",
          100: "#4C4C4C",
          200: "#212121",
        },
        blue: "#0064E5",
      },
    },
  },
  plugins: [],
};
export default config;
