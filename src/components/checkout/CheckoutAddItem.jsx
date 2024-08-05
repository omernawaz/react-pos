import { useState } from "react";

const CheckoutAddItem = ({ onAdd }) => {
  const [itemId, setItemId] = useState();
  const [quantity, setQuantity] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    onAdd(itemId, quantity);
  }
  return (
    <div className="container">
      <form className="row ms-5 me-5" role="search" onSubmit={handleSubmit}>
        <div className="col-8">
          <input
            className="form-control me-2"
            type="number"
            placeholder="Add new item by ID"
            onChange={(e) => setItemId(e.target.value)}
          />
        </div>
        <div className="col">
          <input
            className="form-control me-2"
            type="number"
            placeholder="Qty"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="col">
          <button className="btn btn-outline-success" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutAddItem;
