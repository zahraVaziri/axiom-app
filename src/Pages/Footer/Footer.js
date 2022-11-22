import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  BsInstagram,
  BsPinMapFill,
  BsTelegram,
  BsTelephoneFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer mt-5">
      <Container fluid className="px-4">
        <Row className="align-items-center border-bottom fs-6">
          <Col className="logo-footer">
            <Link to={"/"}>
              <img width={"130px"} src="/image/logo.png" alt="logo" />
            </Link>
          </Col>
          <Col className="link-footer">
            <Link to={"/proce"} className={"mx-4 link"}>
              رویه بازگشت کالا
            </Link>
            <Link className="link" to={"/guide"}>
              راهنما ثبت سفارش
            </Link>
          </Col>
          <Col className="d-flex mt-3 namad-img ">
            <img src="/image/e-namad.png" />
          </Col>
        </Row>
        <Row className="align-items-center border-bottom py-3 fs-6">
          <Col sm={12} lg={4}>
            <span className="icon">
              <BsPinMapFill />
            </span>{" "}
            <span>تهران؛ نارمک خیابان سمنگان پلاک 70</span>
          </Col>
          <Col>
            <span className="icon">
              <BsTelephoneFill />
            </span>{" "}
            <span>021-00000000</span>
          </Col>
          <Col className="d-flex justify-content-end  ">
            <a href={"#"} className="fs-3 ms-2 icon">
              <BsInstagram />
            </a>
            <a href={"#"} className="fs-3 icon">
              <BsTelegram />
            </a>
          </Col>
        </Row>
        <Row className="align-items-center border-bottom pt-3 fs-6">
          <Col>
            <p className="text-center pb-3">
              تمام حقوق این سایت، محفوظ میباشد.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
