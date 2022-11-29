import { useAuth } from "../../Providers/AuthProvider";
import { useCart } from "../../Providers/CartProdvicer";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
const Checkout = () => {
  const auth = useAuth();
  const { cart, total } = useCart();

  if (!cart.length)
    return (
      <main className="container">
        <Link to="/"> بریم به خانه </Link>
      </main>
    );

  return (
    <main className="container">
      {auth ? (
      <section className=" row cartCenter mt-3">
        
          <Col md={8} sm={12}>
            <section className="cartItemList mt-2">
              <h3>بررسی جزییات</h3>
              <p>نام : {auth.name}</p>
              <p>ایمیل : {auth.email}</p>
              <p>شماره تلفن: {auth.phoneNumber}</p>
            </section>
            </Col>
            <Col md={4}  sm={12} className={"mb-3"}>

              <section className="cartSummery">
              {cart &&
                cart.map((c) => {
                  return (
                    <div key={c._id}>
                      {c.name} * {c.quantity} : {c.quantity * c.offPrice}
                    </div>
                  );
                })}
              <hr />
              <div>جمع قیمت  : {total}</div>
            </section>
             </Col>

            </section>
      
        
          
        ) : (
          <p>please login !</p>
        )}
    
    </main>
  );
};

export default Checkout;
