import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
