import React from "react";
import Search from "../common/Search/Search";
import Footer from "../Pages/Footer/Footer";
import NavBottom from "../Pages/NavBottom/NavBottom";
import Navigation from "../Pages/Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <Search />
      {children}
      <Footer />
      <NavBottom />
    </div>
  );
};

export default Layout;
