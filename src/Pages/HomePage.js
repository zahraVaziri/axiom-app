import React from "react";
import ScrollToTop from "../common/Scroll";
import Images from "../common/Images";
const HomePage = () => {
  return (
    <>
      <ScrollToTop />
      <main className="container">
        <Images />
      </main>
    </>
  );
};

export default HomePage;
