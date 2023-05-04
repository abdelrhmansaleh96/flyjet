import React, { FC } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollToTopBtn from "../ScrollToTopBtn/ScrollToTopBtn";
import { Container } from "@mui/material";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main
        style={{
          minHeight: "60vh",
        }}
      >
        {children}
      </main>
      <Footer />
      <ScrollToTopBtn />
    </div>
  );
};

export default Layout;
