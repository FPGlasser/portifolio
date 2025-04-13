import { Footer } from "@/core/presentation/components/features/portifolio/layout";
import { Navbar } from "@/core/presentation/components/features/portifolio/navbar/Navbar";
import React, { ReactNode } from "react";

const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default PublicLayout;
