import "react-toastify/dist/ReactToastify.css";
import "./globals.scss";
import { Metadata } from "next";
import { Playfair_Display, Raleway, Red_Hat_Mono } from "next/font/google";
import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { ToastContainer } from "react-toastify";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import GoogleAnalytics from "@/components/Analytics/Analytics";
import Script from "next/script";

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
  description:
    "Portfolio 2024 de Pierre Guéroult ⋅ Développeur full stack ⋅ Rouen et périphéries ⋅ Étudiant BUT Métiers du Multimédia et de l'Internet ⋅ Recherche de stage et d'alternance",
  keywords:
    "Portfolio, Pierre, Guéroult, Développeur, full stack, Étudiant, BUT, Métiers, Multimédia, Internet, Recherche, stage, alternance, web, autodidacte, Rouen",
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
        <Script
          id="log-at-start"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `console.log("%cHello there ! 👋", "font-size: 3rem;font-family: Courier; font-weight: 600;"); console.log("%cIf you're here, it means you're interested in the code of this website. I'm Pierre, a french web developer. If you want to know more about me, you can check my portfolio at https://pierregueroult.dev. If you want to contact me, you can send me an email at contact@pierregueroult.dev Have a nice day !", "font-size: 1.2rem;");`,
          }}
        ></Script>
        <VercelAnalytics />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
