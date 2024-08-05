import { useState } from "react";
import CheckoutCart from "../components/checkout/CheckoutCart";
import useRequireLogin from "../hooks/useRequireLogin";
const CheckoutPage = () => {
  const [carts, setCarts] = useState([]);

  function handleAddCart() {
    setCarts((carts) => [...carts, carts.length + 1]);
  }

  function handleDeleteCart(cartId) {
    let newCarts = [...carts];
    newCarts.splice(cartId, 1);
    setCarts(newCarts);
  }

  useRequireLogin();
  return (
    <div className="container text-center">
      <h1>Sales Checkout FakeStore POS</h1>
      <div className="container d-flex flex-column">
        {carts.map((cart) => (
          <CheckoutCart
            key={cart}
            cartId={cart}
            onDeleteCart={handleDeleteCart}
          />
        ))}
      </div>
      <button className="btn btn-success" onClick={handleAddCart}>
        New Sale +
      </button>
    </div>
  );
};

export default CheckoutPage;
