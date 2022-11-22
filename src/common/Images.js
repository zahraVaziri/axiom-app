import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useCart, useCartActions } from "../Providers/CartProdvicer";
import { checkInCart } from "../utils/checkInCart";
import "./images.css";
import { BsCheck2All, BsHeart, BsSearch } from "react-icons/bs";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { checkInFav } from "../utils/checkInFav";
import { useFav, useFavActions } from "../Providers/FavorideProvider";
import http from "../services/httpService";
import axios from "axios";
import { getProductsById } from "../DataSendProduct";
const Images = ({  order }) => {
  const { fav } = useFav();
  const dispatch = useFavActions();
   const [currentItems, setCurrentItems] = useState([]);
     const [categories, setCategories] = useState([]);
const [currentHoveredId, setCurrentHoveredId] = useState("");
   useEffect(() => {
     http.get("/product").then((res) => setCategories(res.data));
   }, []);

// useEffect(() => {
//   axios
//     .get("https://fakestoreapi.com/products/categories")
//     .then((res) => console.log(res.data));
// }, []);
// const data = getProductsById(categories,id);
  
  const onMouseOver = (id) => {
    setCurrentHoveredId(id);
  };

  const onMouseOut = () => {
    setCurrentHoveredId("");
  };
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 8;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(categories.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(categories.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, categories]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % categories.length;

    setItemOffset(newOffset);
  };

  const[active,setActive] = useState('')
  const addProductToFav = (product) => {
    toast.info(`${product.name} مورد علاقه شماست`);
    dispatch({ type: "ADD_TO_FAVORAT", payload: product });
    

    // const clicked = product.id;
    // if (active === clicked) {
    //   setActive("");
    // } else {
    //   setActive(clicked);
    // }
  };
  // const renderTooltip = (props) => (
  //   <Tooltip id="button-tooltip" {...props}>
  //     انتخاب سریع
  //   </Tooltip>
  // );
  return (
    <>
      <div className="mt-5">
        <section className="row mx-3">
          {currentItems.map((product, index) => (
            <>
              <section
                key={product._id}
                className="col-md-4 col-lg-3 col-sm-6 px-0 product"
              >
                <div className="prouductImg img-hover-zoom img-hover-zoom--brightness">
                  <Link
                    to={"/product/" + product._id}
                    state={{ data: product }}
                  >
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
                  {/* <OverlayTrigger
                    placement="bottom"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  > */}
                  <Link
                    to="/"
                    className="search-img-product"
                    onClick={order}
                  ></Link>
                  {/* </OverlayTrigger> */}
                  <div className="sharj-img-product">
                    {/* <span class="badge bg-success ">
                      {product.description[0].support1}
                    </span> */}
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

                    <div className="d-flex align-item-center justify-content-evenly w-100 p-2 fs-5">
                      <Link
                        className="p-2 border rounded-2"
                        to={"/product/" + product._id}
                        state={{ data: product }}
                      >
                        <BsSearch />
                      </Link>

                      <button
                        className={` fs-4 px-2 pt-2 border bg-white rounded-2`}
                        id={product._id}
                        onClick={() => addProductToFav(product)}
                      >
                        {checkInFav(fav, product) ? (
                          <Link to={"/favoride"}>
                            {" "}
                            <BsCheck2All />{" "}
                          </Link>
                        ) : (
                          <BsHeart />
                        )}
                      </button>
                    </div>
                    {/* <button
                      onClick={() => addProductHandler(product)}
                      className={"btns primry"}
                    >
                      {checkInCart(cart, product) ? (
                        <Link to={"/cart"}> مشاهده در سبد خرید</Link>
                      ) : (
                        "انتخاب محصول"
                      )}
                    </button> */}
                  </div>
                </div>
              </section>
            </>
          ))}
        </section>
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="بعد >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< قبل"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
};

export default Images;
