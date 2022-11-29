import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../Providers/CartProdvicer";
import { BsCart3, BsHeart, BsList, BsPersonCheckFill } from "react-icons/bs";
import "./Navigation.css";
import MenuDrawer from "../MenuDrawer";
import { Hidden, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { toggleDrawer, useLayoutDispatch } from "../../Providers/LayoutContext";
import { useState } from "react";
import { useFav } from "../../Providers/FavorideProvider";
import { useAuth } from "../../Providers/AuthProvider";
import Hamburger from "hamburger-react";
import Cart from "../Cart";
import { HashLink } from "react-router-hash-link";
const Navigation = () => {
  const { cart } = useCart();
  const userData = useAuth();
  const { fav } = useFav();
  const theme = useTheme();
  const isTabletSize = useMediaQuery(theme.breakpoints.down("md"));
  const LayoutDispatch = useLayoutDispatch();
let [resiz, setResiz] = useState({ height: `${window.innerHeight}px` });
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  let header = document.getElementById("navbar");
  if (window.pageYOffset > 0) {
    header.classList.add("navbar-sticky");
  } else {
    header.classList.remove("navbar-sticky");
  }
}

window.addEventListener("resize", () =>
  setResiz({ height: `${window.innerHeight}px` })
);
  return (
    <header className="mainNavigation" id={"navbar"}>
      <nav className="container">
       
        {isTabletSize && (
          <>
            <IconButton onClick={() => toggleDrawer(LayoutDispatch)}>
              <BsList />
            </IconButton>
            <Link
              to="/"
              style={{ backgroundColor: "transparent", color: "black ",marginTop: "13px" }}
            >
              <div>
                <img width={"130px"} src="/image/logo.png" alt="logo" />
              </div>
            </Link>
          </>
        )}
       
        {isTabletSize ? (
          <MenuDrawer />
        ) : (
          <>
            <ul>
              <Link
                to="/"
                style={{ backgroundColor: "transparent", color: "black " }}
              >
                <div>
                  <img width={"130px"} src="/image/logo.png" alt="logo" />
                </div>
              </Link>
              <li className="navlink">
                <NavLink
                  to="/"
                  className={` navlink ${({ isActive }) =>
                    isActive ? "activeLink" : "navlink"}`}
                  end
                >
                  خانه
                </NavLink>
              </li>
              <li className="favLink navlink">
                <NavLink
                  to="/favoride"
                  className={` navlink ${({ isActive }) =>
                    isActive ? "activeLink" : "navlink"}`}
                >
                  <BsHeart />
                </NavLink>
                <span>{fav.length}</span>
              </li>
            </ul>
            <ul>
              <li className="cartLink navlink ">
                <NavLink
                  to="/cart"
                  className={` navlink ${({ isActive }) =>
                    isActive ? "activeLink" : "navlink"}`}
                >
                  <BsCart3 />
                </NavLink>
                <span>{cart.length}</span>
              </li>

              <li className="navlink">
                <NavLink
                  className={` navlink ${({ isActive }) =>
                    isActive ? "activeLink" : "navlink"}`}
                  to={userData ? "/profile" : "/login"}
                >
                  {userData ? <BsPersonCheckFill /> : "ورود / ثبت نام"}
                </NavLink>
              </li>
             
            </ul>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
