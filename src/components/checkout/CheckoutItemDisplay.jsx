import CheckoutItem from "./CheckoutItem";
const CheckoutItemDisplay = ({ items, cartId, onEdit, onDelete }) => {
  return (
    <div className="d-flex flex-column p-2 m-3 border border-2">
      <div className="container ps-5 pe-5 ms-3 me-3 mt-2">
        <div className="row">
          <div className="col">
            <p>Img</p>
          </div>
          <div className="col-6">
            <p>Name</p>
          </div>
          <div className="col">
            <p>Price</p>
          </div>
          <div className="col">
            <p>Qty</p>
          </div>
          <div className="col-2">
            <p>Actions</p>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column p-2 m-3">
        {items.map((item) => (
          <CheckoutItem
            key={`${cartId}-${item.index}`}
            item={item}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default CheckoutItemDisplay;
