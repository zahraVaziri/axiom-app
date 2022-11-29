import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import HomePage from "./Pages/HomePage";
import Cart from "./Pages/Cart";
import CartProvider from "./Providers/CartProdvicer";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "./component/Checkout/Checkout";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import Product from "./Pages/Product/Product";
import Procedure from "./Pages/procedure/Procedure";
import Guide from "./Pages/guide/Guide";
import Favoride from "./Pages/Favoride";
import FavProvider from "./Providers/FavorideProvider";
import NotFound from "./Pages/NotFound";
import { LayoutProvider } from "./Providers/LayoutContext";
import useDocumentTitle from "./hooks/useDocumentTitle";
import AuthProvider from "./Providers/AuthProvider";
import Profile from "./Pages/Profile/Profile";
import addNotification from "react-push-notification";
import logo from "./logo-notif.png";
import { Notifications } from "react-push-notification";
function Home() {
  useDocumentTitle("مجموعه پینگ");
  return <HomePage />;
}

function CartPage() {
  useDocumentTitle("سبدخرید_مجموعه پینگ");
  return <Cart />;
}

function Fav() {
  useDocumentTitle("علاقه مندی_مجموعه پینگ");
  return <Favoride />;
}
function GuidePage() {
  useDocumentTitle("راهنمای سفارش_مجموعه پینگ");
  return <Guide />;
}
function ProcedurePage() {
  useDocumentTitle("رویه ثبت سفارش_مجموعه پینگ");
  return <Procedure />;
}
function Logins() {
  useDocumentTitle("ورود_مجموعه پینگ");
  return <LoginPage />;
}
function Sign() {
  useDocumentTitle("ثبت نام_مجموعه پینگ ");
  return <SignupPage />;
}
function CheckoutPage() {
  useDocumentTitle(" ادامه سفارش_مجموعه پینگ");
  return <Checkout />;
}

function NotFounds() {
  useDocumentTitle(" مجموعه پینگ_404");
  return <NotFound />;
}

window.onload = function () {
  addNotification({
    title: "به فروشگاه ما خوش آمدید",
    subtitle: "به فروشگاه ما خوش آمدید",
    message: " کلیک کن که بریم تو لینکدین من :)",
    theme: "red", //optional, default: undefined
    duration: 5000, //optional, default: 5000,
    icon: logo,
      onClick: ()=> window.location = "https://www.linkedin.com/in/zahra-vaziri-a3a024222/",
    native: true, // when using native, your OS will handle theming.
  });
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <LayoutProvider>
          <CartProvider>
            <FavProvider>
              <ToastContainer />
              <Notifications />
              <Layout>
                <Routes>
                  <Route path="/favoride" element={<Fav />} />
                  <Route path="/guide" element={<GuidePage />} />
                  <Route path="/proce" element={<ProcedurePage />} />
                  <Route path="/login" element={<Logins />} />
                  <Route path="/signup" element={<Sign />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/profile/*" element={<Profile />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/product/:_id" element={<Product />} />
                  <Route path="*" element={<NotFounds />} />
                </Routes>
              </Layout>
            </FavProvider>
          </CartProvider>
        </LayoutProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
