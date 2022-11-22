import { useEffect, useState } from "react";
import { BsChevronUp } from "react-icons/bs";
import "./scroll.css";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-to-btm">
      {" "}
      {showTopBtn && (
        <BsChevronUp className="icon-position icon-style" onClick={goToTop} />
      )}{" "}
    </div>
  );
};
export default ScrollToTop;
