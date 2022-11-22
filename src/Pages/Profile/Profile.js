import React from "react";
import { Col } from "react-bootstrap";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useCart } from "../../Providers/CartProdvicer";
import Account from "./Account";

const Profile = () => {
  const history = useNavigate();

  const exitHandler = () => {
    localStorage.removeItem("authState");
    history("/");

    window.location.reload();
  };
  return (
    <div>
      <main className="container">
        <section className=" row mt-3">
          <Col md={4} sm={12}>
            <section className="cartItemList pb-5">
              <div>
                <div className="my-2">
                  <Link to={"/profile/account"}>حساب کاربری</Link>
                </div>

                <div className="my-3">
                  <button onClick={exitHandler}>خروج از حساب کاربری</button>
                </div>
              </div>
            </section>
          </Col>
          <Col md={8} sm={12} className={"mb-3"}>
            <section className="cartSummery">
              <Routes>
                <Route path="account" element={<Account />} />
              </Routes>
            </section>
          </Col>
        </section>
      </main>
    </div>
  );
};

export default Profile;
