import "./globals.scss";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

const font: NextFontWithVariable = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font",
});

export const metadata: Metadata = {
  title: "Portfolio 2024 - Pierre Guéroult 🪶",
  description: "",
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="fr" dir="ltr" className={font.variable}>
      <body>{children}</body>
    </html>
  );
}
