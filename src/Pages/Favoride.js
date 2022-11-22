import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { BsCheck2All, BsHeart, BsSearch, BsX } from "react-icons/bs";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useFav, useFavActions } from "../Providers/FavorideProvider";
import { checkInFav } from "../utils/checkInFav";
import "./cartPage.css";
const Favoride = () => {
  const { fav } = useFav();
  const dispatch = useFavActions();

  const [currentHoveredId, setCurrentHoveredId] = useState("");
  const onMouseOver = (id) => {
    setCurrentHoveredId(id);
  };

  const onMouseOut = () => {
    setCurrentHoveredId("");
  };

  const addProductToFav = (product) => {
    toast.info(`${product.name} مورد علاقه شماست`);
    dispatch({ type: "ADD_TO_FAVORAT", payload: product });
  };
  const deleteProductFav = (product) => {
    dispatch({ type: "REMEVE_TO_FAVORAT", payload: product });
  };
  if (!fav.length)
    return (
      <main className="container">
        <h2>محصولی انتخاب نشده</h2>
      </main>
    );
  return (
    <Container>
      <h2 className="mt-4"> محصولات مورد علاقه شما</h2>
      <main className="row mt-4">
        {fav.map((product) => (
          <>
            <section
              key={product._id}
              className=" product col-md-6 col-lg-3 col-sm-12 "
            >
              <div
                style={{ cursor: "pointer" }}
                onClick={() => deleteProductFav(product)}
              >
                <span>
                  حذف <BsX />
                </span>
              </div>
              <div className="prouductImg img-hover-zoom img-hover-zoom--brightness">
                <Link to={"/product/" + product._id} state={{ data: product }}>
                  <img
                    src={
                      currentHoveredId === product._id
                        ? product.image2
                        : product.image
                    }
                    alt={product.name}
                    onMouseOver={() => {
                      onMouseOver(product._id);
                    }}
                    onMouseOut={onMouseOut}
                  />
                </Link>

                <Link to="/" className="search-img-product">
                  <span className="fw-3">
                    {product.description[0].support2}
                  </span>
                </Link>

                <div className="sharj-img-product">
                  <span className="fw-3 ">
                    {product.description[0].support1}
                  </span>
                </div>
              </div>

              <div className="desc">
                <div className="productDesc">
                  <Link
                    to={"/product/" + product._id}
                    state={{ data: product }}
                  >
                    <p className="mb-2 name-product">{product.name} </p>
                  </Link>

                  <p className="mb-2 price-product">{product.price} تومان</p>

                  <p className="mb-2">{`اندازه لژ : ${product.Lodge} سانتی متر`}</p>

                  <div className="d-flex align-item-center justify-content-evenly w-100 p-2 fs-5 ">
                    <Link
                      className="p-2 border rounded-2"
                      to={"/product/" + product._id}
                      state={{ data: product }}
                    >
                      <BsSearch />
                    </Link>

                    <button
                      className={` fs-4 px-2 pt-2 border rounded-2`}
                      id={product._id}
                      onClick={() => addProductToFav(product)}
                    >
                      {checkInFav(fav, product) ? <BsCheck2All /> : <BsHeart />}
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </>
        ))}
      </main>
    </Container>
  );
};

export default Favoride;
