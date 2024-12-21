import React from "react";
import Header from "./Header";
import Footer from "./Footer";

// Layout component that wraps Header, main content, and Footer
const Layout: React.FC = ({ children }) => {
  return (
    <>
      {/* Render Header */}
      <Header />
      
      {/* Main content wrapped in a min-height screen to fill the page */}
      <main className="min-h-screen">{children}</main>
      
      {/* Render Footer */}
      <Footer />
    </>
  );
};

export default Layout;
