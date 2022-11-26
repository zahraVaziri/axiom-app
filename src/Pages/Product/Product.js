import React, { useState } from "react";
import { Breadcrumb, Carousel, Col, Row } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { ProductServise } from "../../data";
import { useCart, useCartActions } from "../../Providers/CartProdvicer";
import { checkInCart } from "../../utils/checkInCart";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Filter from "../../component/Filter/Filter";
import Modal from "../Modal/Modal";
import { BsRulers } from "react-icons/bs";
import { Helmet } from "react-helmet";
import './product.css'
const Product = () => {
  const location = useLocation()
  const {data} = location.state
  console.log(location)
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
              <Filter />
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

            {/* <h3>{data.name}</h3>
          <h4>{data.price} تومان</h4>
          <p>
            جنس رویه کار شمعی ضد آب_داخل کار پشم شیشه گرم_آستر داخل کار مخمل یا
            شمعی است_کلاه کار جدا میشود_داخل کار جیب دار _جیب ها زیپ خور_با
            ضمانت شستشو و رنگ_ قواره استاندارد
          </p>
          <p>
            رنگبندی: سبز _مشکی _طوسی روشن _طوسی تیره _زرد_سرمه ای_نارنجی_آبی
          </p>
          <p>سایزبندی: L XL 2XL 3XL</p>
          <div>
            <p>جزییات سایزبندی:(عرض سینه:از زیر بغل تا زیر بغل کار است)</p>
            <p>L :قد: 66 عرض زیر بغل: 50</p>
            <br />
            <p>XL :قد: 69 عرض زیر بغل: 53</p>
            <br />
          </div>
          <p>
            لطفا قبل از خرید راهنمای سایزبندی را مطالعه کنید و اندازه هارا با
            یکی از لباس های مشابه خود مقایسه کنید(ممکن است قواره هر مدل متفاوت
            باشد)
          </p>
          <div>
            <span>رنگ : </span>
            <span></span>
          </div>
          <button
            onClick={() => addProductHandler(data)}
            className={"btns primry"}
          >
            {checkInCart(cart, data) ? (
              <Link to={"/cart"}> مشاهده در سبد خرید</Link>
            ) : (
              "انتخاب محصول"
            )}
          </button> */}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Product;
