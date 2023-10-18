import "./globals.scss";
import { Metadata } from "next";
import { Raleway } from "next/font/google";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const font: NextFontWithVariable = Raleway({
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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
