import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
