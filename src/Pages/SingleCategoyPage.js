// import { useLocation,usep } from "react-router";
// import Layout from "../Layout/Layout";
// import { useCart, useCartActions } from "../Providers/CartProdvicer";
// import { checkInCart } from "../utils/checkInCart";
// import { toast } from "react-toastify";
// import Aside from "../component/Aside/Aside";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import CircularProgress from "@mui/material/CircularProgress";
// import queryString from "query-string";
// import { useParams } from "react-router-dom";

// const SingleCategoryPage = () => {
//   const location = useLocation()
//   const para =useParams()
//   let parsed = queryString.parse(location.search);
//   const { cart } = useCart();
//   const [productsList, setProductsList] = useState([]);
//   const [laoding, setLoading] = useState(true);

//   const dispatch = useCartActions();
//   const addProductHandler = (product) => {
//     toast.success(`${product.name} added to cart !`);
//     dispatch({ type: "ADD_TO_CART", payload: product });
//   };

//   useEffect(() => {
//     setLoading(true);
//     setProductsList([]);
//     parsed = {};
//     const category = para.categoryName.split("-").join(" ");
//     axios
//       .get(`https://fakestoreapi.com/products/category/${category}`)
//       .then((res) => {
//         setLoading(false);
//         setProductsList(res.data);
//       });
//   }, [para]);

//   return (
//     <Layout>
//       <div className="content container">
//         <Aside />
//         <main className="content__main">
//           <section className="productList">
//             {laoding && (
//               <div style={{ display: "flex", justifyContent: "center" }}>
//                 <CircularProgress size={80} />
//               </div>
//             )}
//             {productsList.map((product) => {
//               return (
//                 <section className="product" key={product.id}>
//                   <div className="prouductImg">
//                     <img src={product.image} alt={product.name}></img>
//                   </div>
//                   <div className="productDesc">
//                     <p>{product.name}</p>
//                     <p> $ {product.price}</p>
//                     <button
//                       onClick={() => addProductHandler(product)}
//                       className="btn primary"
//                     >
//                       {checkInCart(cart, product) ? "In cart" : "Add to Cart"}
//                     </button>
//                   </div>
//                 </section>
//               );
//             })}
//           </section>
//         </main>
//       </div>
//     </Layout>
//   );
// };

// export default SingleCategoryPage;
