import { manrope, mansalva } from "@/lib/fonts";
import "@/globals.css";
import { PropsWithChildren } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bizapp Live Chat",
  description: "Help us serve you better",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${mansalva.variable} font-manrope`}
    >
      <body>
        <div className="w-full h-full overflow-hidden flex">{children}</div>
      </body>
    </html>
  );
}
