import "react-toastify/dist/ReactToastify.css";
import "./globals.scss";
import { Metadata } from "next";
import { Playfair_Display, Raleway, Red_Hat_Mono } from "next/font/google";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { ToastContainer } from "react-toastify";

const font: NextFontWithVariable = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font",
});

const display: NextFontWithVariable = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--display",
});

const mono: NextFontWithVariable = Red_Hat_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--mono",
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
    <html lang="fr" dir="ltr" className={`${font.variable} ${mono.variable} ${display.variable}`}>
      <body>
        {children}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
          theme="dark"
          limit={3}
        />
      </body>
    </html>
  );
}
