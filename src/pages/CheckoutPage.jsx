import useRequireLogin from "../hooks/useRequireLogin";
const CheckoutPage = () => {
  useRequireLogin();
  return <div>Checkout</div>;
};

export default CheckoutPage;
