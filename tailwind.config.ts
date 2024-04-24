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
        inter: ["var(--font-inter)"],
        roboto: ["var(--font-roboto)"],
      },
      colors: {
        "main-blue": { DEFAULT: "#101828", 100: "#161827" },
        red: {
          DEFAULT: "#FF4840",
          100: "#FF4B40",
          200: "#FF1A1A",
        },
        slate: {
          100: "#FCFCFC",
          200: "#F7F7F7",
          300: "#F2F2F2",
          400: "#E6E6E6",
          500: "#707070",
          600: "#e1e1e1",
          700: "#333333",
        },
        gray: {
          DEFAULT: "#6F7782",
          3: "#828282",
          50: "#D8DAE5",
          75: "#BCC2CC",
          100: "#B3B3B3",
          200: "#EBEBEB",
          300: "#8A8B93",
          400: "#98A2B3",
          800: "#1D2939",
          900: "#8E8B8B",
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
          300: "#666668",
        },
        blue: { DEFAULT: "#0064E5", 100: "#2A224F" },
        primary: "#3a3541",
      },
      screens: {
        mobile: "576px",
        laptop: "1199px",
        desktop: "1320px",
      },
    },
  },
  plugins: [],
};
export default config;
