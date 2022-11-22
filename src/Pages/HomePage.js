import React from "react";
import ScrollToTop from "../common/Scroll";
import Images from "../common/Images";
import {addNotification} from "react-push-notification";
const HomePage = () => {
   const clickToNotify = () => {
     addNotification({
       title: "www",
       message: "eeeee",
       duration: 4000,
       
       native: true,
     });
   };
  return (
    <>
      <ScrollToTop />
      <main className="container">
        <div>
          <button onClick={clickToNotify}>click</button>
        </div>
        <Images
        // data={images}
        // order={purchasedHandler}
        // modalClick={modalCloseHandler}
        // show={purchasrd}
        />
      </main>
    </>
  );
};

export default HomePage;
