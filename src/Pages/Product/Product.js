import React, { useState } from "react";
import { Breadcrumb, Col, Row } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart, useCartActions } from "../../Providers/CartProdvicer";
import { checkInCart } from "../../utils/checkInCart";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Modal from "../Modal/Modal";
import { BsRulers } from "react-icons/bs";
import { Helmet } from "react-helmet";
import "./product.css";
const Product = () => {
  const location = useLocation();
  const { data } = location.state;
  console.log(location);
  const { cart } = useCart();
  const dispatch = useCartActions();

  const addProductHandler = (product) => {
    toast.success(`${product.name} انتخاب شد`);
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const [purchasrd, setPurchasrd] = useState(false);

  const purchasedHandler = () => {
    setPurchasrd(true);
  };
  const modalCloseHandler = () => {
    setPurchasrd(false);
  };

  const images = [
    {
      original: data.image,
      thumbnail: data.image,
    },
    {
      original: data.image2,
      thumbnail: data.image2,
    },
  ];
  return (
    <div>
      <Modal show={purchasrd} modalClick={modalCloseHandler} />
      <Helmet>
        <title>{`${data.name}_مجموعه پینگ`}</title>
      </Helmet>
      <div className="container mt-5">
        <Breadcrumb>
          <Breadcrumb.Item href="/">خانه</Breadcrumb.Item>
          <Breadcrumb.Item active>{data.name} </Breadcrumb.Item>
        </Breadcrumb>
        <Row>
          <Col className="mb-3">
            <div>
              <ImageGallery
                items={images}
                autoPlay={true}
                showPlayButton={false}
                slideDuration={200}
              />
            </div>
          </Col>
          <Col sm={12} md={6} className="data-product mb-2">
            <div className="d-flex flex-column align-items-start justify-content-center shadow  pt-3 px-4 pb-5 rounded-3">
              <h3 className="my-3">{data.name}</h3>
              <h4 className="mb-3 color-primery">{data.price} تومان</h4>
              <p className="mb-3 text-black-50">{`اندازه لژ : ${data.Lodge} سانتی متر`}</p>

              <div>
                <span className="btn-modal" onClick={purchasedHandler}>
                  <BsRulers className="mx-2" />
                  راهنمای سایز
                </span>
                <button
                  onClick={() => addProductHandler(data)}
                  className={"btns primry mx-4"}
                >
                  {checkInCart(cart, data) ? (
                    <Link to={"/cart"}> مشاهده در سبد خرید</Link>
                  ) : (
                    "انتخاب محصول"
                  )}
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Product;
