import "./globals.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio 2024 - Pierre Guéroult 🪶",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" dir="ltr">
      <body>{children}</body>
    </html>
  );
}
