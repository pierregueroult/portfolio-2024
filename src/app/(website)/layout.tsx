import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  modal: ReactNode;
}

export default function RootLayout({ children, modal }: Props) {
  return (
    <>
      <Header />
      {children}
      {modal}
      <Footer />
    </>
  );
}
