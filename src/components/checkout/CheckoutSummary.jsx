import { useState, useEffect } from "react";
import usePutData from "../../hooks/usePutData";
import Alert from "../generic/Alert";
import Button from "../generic/Button";

const CheckoutSummary = ({ items, onDeleteCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [customMessage, setCustomMessage] = useState(null);
  const [response, isLoading, error, handlePutData] = usePutData();
  const taxAmount = 16;

  function handleDiscount(e) {
    e.preventDefault();
    const code = e.target.elements[0].value;
    //we would validate it against an api here, but fakestore doesn't have 1 so I'll just hardcode it here.

    if (code === "DISC25") {
      setDiscountAmount(totalPrice * 0.25);
      setCustomMessage(null);
    } else if (code === "DISC10") {
      setDiscountAmount(totalPrice * 0.1);
      setCustomMessage(null);
    } else {
      setCustomMessage({
        type: "danger",
        name: "No Discount Code",
        message: "This is not a valid discount code",
      });
    }
  }

  useEffect(() => {
    let priceTotal = 0;
    let itemsTotal = 0;
    for (const item of items) {
      priceTotal += item.price * item.quantity;
      itemsTotal += Number(item.quantity);
    }
    setTotalPrice(priceTotal - discountAmount);
    setTotalItems(itemsTotal);
  }, [items, discountAmount]);

  useEffect(() => {
    if (response && !isLoading && !error) {
      setCustomMessage({
        type: "success",
        name: "Sale Complete",
        message: "Sale has been completed successfully",
      });
    }
  }, [response, isLoading, error]);

  function handleCloseCart() {
    if (items.length === 0) {
      setCustomMessage({
        type: "danger",
        name: "Empty Cart",
        message: "Cannot close sale on empty cart",
      });
      return;
    }

    let formData = new FormData();
    let date = new Date();
    let dateString = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;

    let products = items.map((item) =>
      Object({ productId: item.id, quantity: item.quantity })
    );

    formData.append("userId", 1);
    formData.append("date", dateString);
    formData.append("products", products);

    handlePutData(import.meta.env.VITE_FAKEAPI_CARTS, formData);
  }

  return (
    <div className="container">
      {customMessage && (
        <Alert
          alertType={customMessage.type}
          alertMessage={[customMessage.message]}
          alertTitle={customMessage.name}
        >
          <Button
            buttonType={customMessage.type}
            onClick={() =>
              customMessage.type === "danger"
                ? setCustomMessage(null)
                : onDeleteCart()
            }
          >
            {customMessage.type === "danger" ? "Dissmiss" : "Remove Cart"}
          </Button>
        </Alert>
      )}
      <div className="row">
        <div className="col d-flex flex-column pe-5 ps-5 gap-3">
          <input
            type="number"
            className="form-control"
            id="totalQty"
            disabled={true}
            placeholder={"Total Items: " + totalItems}
          ></input>

          <form className="d-flex" role="search" onSubmit={handleDiscount}>
            <input
              className="form-control me-2"
              type="text"
              placeholder="Apply Discount Code"
            />
            <button className="btn btn-primary" type="submit">
              Apply
            </button>
          </form>

          <button className="btn btn-success" onClick={handleCloseCart}>
            Close Sale
          </button>
          <button className="btn btn-danger" onClick={onDeleteCart}>
            Delete Sale
          </button>
        </div>
        <div className="col d-flex flex-column pe-5 ps-5 gap-3">
          <input
            type="number"
            className="form-control"
            id="grossPrice"
            disabled={true}
            placeholder={"Gross Price: " + totalPrice.toFixed(2)}
          ></input>
          <input
            type="number"
            className="form-control"
            id="qty"
            disabled={true}
            placeholder={"Discount: " + discountAmount.toFixed(2)}
          ></input>
          <input
            type="number"
            className="form-control"
            id="qty"
            disabled={true}
            placeholder={"Tax: " + 16 + "%"}
          ></input>
          <input
            type="number"
            className="form-control"
            id="qty"
            disabled={true}
            placeholder={
              "Total: " + Number(totalPrice * (1 + taxAmount / 100)).toFixed(2)
            }
          ></input>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSummary;
