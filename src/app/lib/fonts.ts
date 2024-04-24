import { Inter, Manrope, Mansalva, Roboto } from "next/font/google";

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

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["400", "500"],
});
