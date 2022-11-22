import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart, useCartActions } from "../Providers/CartProdvicer";
import "./cartPage.css";
const Cart = () => {
  const { cart, total } = useCart();
  const dispatch = useCartActions();
  if (!cart.length)
    return (
      <main className="container mt-3">
        <h2> محصولی به سبد خرید اضافه نشد</h2>
      </main>
    );

  const incHandler = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };
  const decHandler = (cartItem) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: cartItem });
  };

  return (
    <>
      <main className="container">
        <section className=" row mt-3">
          <Col md={8} sm={12}>
            <section className="cartItemList mb-3">
              {cart.map((item) => {
                return (
                  <div className="cartItem" key={item._id}>
                    <div className="itemImg">
                      <img src={item.image} alt={item.name}></img>
                    </div>
                    <div>{item.name}</div>
                    <div>{item.offPrice * item.quantity}</div>
                    <div className="btnGroups mb-2">
                      <button onClick={() => decHandler(item)}>-</button>
                      <button>{item.quantity}</button>
                      <button onClick={() => incHandler(item)}>+</button>
                    </div>
                  </div>
                );
              })}
            </section>
          </Col>

          <Col md={4} sm={12} className={"mb-3"}>
            <CartSummery cart={cart} total={total} />
          </Col>
        </section>
      </main>
    </>
  );
};

export default Cart;

const CartSummery = ({ total, cart }) => {
  const originalTotalPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    : 0;

  return (
    <section className="cartSummery">
      <div className="summeryItem">
        <p>قیمت کالا</p>
        <p> {originalTotalPrice} تومان</p>
      </div>
      <div className="summeryItem">
        <p>تخفیف کالا</p>
        <p>{originalTotalPrice - total} تومان</p>
      </div>

      <div className="summeryItem net">
        <p>جمع سبد خرید </p>
        <p> {total} تومان</p>
      </div>
      <Link to="/signup?redirect=/checkout">
        <button
          className="btns primary"
          style={{ marginTop: "20px 0", width: "100%" }}
        >
          ادامه سفارش
        </button>
      </Link>
    </section>
  );
};
