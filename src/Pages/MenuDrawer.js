import React from "react";
// import useStyles from './styles';
import { Drawer } from "@mui/material";
import {
  toggleDrawer,
  useLayoutDispatch,
  useLayoutState,
} from "../Providers/LayoutContext";
import { Link } from "react-router-dom";
import { BsFillBagXFill, BsFillChatRightTextFill, BsShop } from "react-icons/bs";
const MenuDrawer = () => {
  const { drawerOpen } = useLayoutState();
  const LayoutDispatch = useLayoutDispatch();
  return (
    <React.Fragment>
      <Drawer
        anchor={"right"}
        open={drawerOpen}
        onClose={() => {
          toggleDrawer(LayoutDispatch);
        }}
      >
        <ul className="ul-menu">
          <li>
            <span><BsShop/></span>
            <Link
              className="my-4 p-2"
              to="/"
              onClick={() => {
                toggleDrawer(LayoutDispatch);
              }}
            >
              خانه
            </Link>
          </li>

          <li>
            <span><BsFillChatRightTextFill/></span>
            <Link
              className="my-4 p-2"
              to="/guide"
              onClick={() => {
                toggleDrawer(LayoutDispatch);
              }}
            >
              راهنمای ثبت سفارش
            </Link>
          </li>

          <li>
            <span><BsFillBagXFill/></span>
            <Link
              className="my-4 p-2"
              to="/proce"
              onClick={() => {
                toggleDrawer(LayoutDispatch);
              }}
            >
              رویه بازگشت کالا
            </Link>
          </li>
        </ul>
      </Drawer>
    </React.Fragment>
  );
};
export default MenuDrawer;
