import React from "react";
import { Container } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container>
      <div className="notfound">
        <header></header>
        <h5 className="my-5 text-danger">صفحه ای که دنبالش بودی پیدا نکردی</h5>
        <Link to={"/"}>
          <h4 className="color-primery">
            بریم به صفحه ای اصلی؟ <BsArrowLeft />
          </h4>
        </Link>
      </div>
    </Container>
  );
};

export default NotFound;
