import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../Providers/CartProdvicer";
import { BsCart3, BsFillPersonPlusFill, BsHeart, BsPersonCheckFill, BsShop } from "react-icons/bs";
import "./NavBottom.css";
import { useFav } from "../../Providers/FavorideProvider";
import { useAuth } from "../../Providers/AuthProvider";
const NavBottom = () => {
  const { cart } = useCart();
  const userData = useAuth();
  const { fav } = useFav();

  return (
    <div className="mainNavBottom" id={"navbar-bottom"}>
      <div className="container">
        <ul>
          <li className="favLink1 ">
            <Link
              to="/"
              style={{ backgroundColor: "transparent", color: "black " }}
            >
              <BsShop />
              <p style={{ fontSize: "12px", textAlign: "center" }}>خانه </p>
            </Link>
          </li>

          <li className="favLink1 ">
            <NavLink
              to="/favoride"
              className={` ${({ isActive }) => (isActive ? "activeLink" : "")}`}
            >
              <BsHeart />
              <p style={{ fontSize: "12px", textAlign: "center" }}>
                علاقه مندی
              </p>
            </NavLink>

            <span>{fav.length}</span>
          </li>

          <li className="cartLink1">
            <NavLink
              to="/cart"
              className={` ${({ isActive }) => (isActive ? "activeLink" : "")}`}
            >
              <BsCart3 />
              <p style={{ fontSize: "12px", textAlign: "center" }}>سبد خرید </p>
            </NavLink>

            <span>{cart.length}</span>
          </li>

          <li className="favLink1 ">
            <NavLink
              className={`  ${({ isActive }) =>
                isActive ? "activeLink" : ""}`}
              to={userData ? "/profile" : "/login"}
            >
              {userData ? <BsPersonCheckFill /> : <BsFillPersonPlusFill />}
              <p style={{ fontSize: "12px", textAlign: "center" }}>
                {userData ? "حساب کاربری" : "عضویت"}
              </p>
            </NavLink>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default NavBottom;
