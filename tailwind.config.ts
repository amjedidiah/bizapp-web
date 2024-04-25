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
        montserrat: ["var(--font-montserrat)"],
      },
      colors: {
        "main-blue": { DEFAULT: "#101828", 100: "#161827" },
        red: {
          DEFAULT: "#FF4840",
          100: "#FF4B40",
          200: "#FF1A1A",
        },
        slate: {
          50: "#A1A1A1",
          100: "#FCFCFC",
          200: "#F7F7F7",
          300: "#F2F2F2",
          400: "#E6E6E6",
          500: "#707070",
          600: "#e1e1e1",
          700: "#CCCCCC",
          800: "#999999",
          900: "#525252",
        },
        gray: {
          DEFAULT: "#6F7782",
          1: "#333333",
          2: "#4F4F4F",
          3: "#828282",
          5: "#E0E0E0",
          9: "#BDBDBD",
          10: "#BEC3CB",
          15: "#a9abb0",
          20: "#EFEFEF",
          50: "#D8DAE5",
          75: "#BCC2CC",
          100: "#B3B3B3",
          200: "#EBEBEB",
          300: "#8A8B93",
          400: "#98A2B3",
          700: "#344054",
          800: "#1D2939",
          900: "#8E8B8B",
        },
        green: {
          DEFAULT: "#4CA90C",
          100: "#DEEDE5",
          200: "#56C568",
        },
        yellow: {
          DEFAULT: "#FCE28C",
          100: "#EBB22F",
          200: "#FFCB21",
          300: "#FFF5d4",
          400: "#FFC400",
          500: "#F2E0A5",
        },
        black: {
          DEFAULT: "#000000",
          100: "#4C4C4C",
          200: "#212121",
          300: "#666668",
          400: "#1A1A1A",
        },
        blue: { DEFAULT: "#0064E5", 100: "#2A224F" },
        primary: {
          DEFAULT: "#3a3541",
          100: "#1B1A57",
        },
        "mid-gray": "#666666",
        purple: "#8D37C7",
        "light-red": "#3d3c3b",
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
