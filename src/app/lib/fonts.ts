import { Manrope, Mansalva } from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const mansalva = Mansalva({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mansalva",
  weight: ["400"],
});
