import React from 'react'
import { useAuth } from '../../Providers/AuthProvider';
import { useCart } from '../../Providers/CartProdvicer';

const Account = () => {
    const auth = useAuth();
    const {cart,total} = useCart()
  return (
    <div>
      <p>
        {` سلام ${auth.name}`}
        <br />

        <p>ایمیل : {auth.email}</p>
        <p>شماره تلفن: {auth.phoneNumber}</p>
      </p>
      <section >
        {cart &&
          cart.map((c) => {
            return (
              <div key={c._id}>
                {c.name} * {c.quantity} : {c.quantity * c.offPrice}
              </div>
            );
          })}
        <hr />
        <div>جمع هزینه های شما  : {total}</div>
      </section>
    </div>
  );
}

export default Account
