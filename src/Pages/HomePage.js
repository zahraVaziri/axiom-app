import React from "react";
import ScrollToTop from "../common/Scroll";
import Images from "../common/Images";
import addNotification from "react-push-notification";
const HomePage = () => {
  //  const buttonClick = () => {
  //    addNotification({
  //      title: "Warning",
  //      subtitle: "This is a subtitle",
  //      message: "This is a very long message",
  //      theme: "darkblue",
  //      native: true, // when using native, your OS will handle theming.
  //    });
     
  //  };
  return (
    <>
      <ScrollToTop />
      <main className="container">
        {/* <div className="page">
          <button onClick={buttonClick} className="button">
            Hello world.
          </button>
        </div> */}
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
