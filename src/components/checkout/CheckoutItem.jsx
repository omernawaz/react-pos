import { useState } from "react";

const CheckoutItem = ({ item, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [quantity, setQuantity] = useState(item.quantity);
  function handleEdit() {
    if (isEditing) {
      onEdit(item.index, quantity);
    }
    setIsEditing(!isEditing);
  }
  return (
    <div className="container text-center">
      <div className="row align-items-center">
        <div className="col ">
          <img className="" src={item.img} style={{ width: "50px" }} />
        </div>
        <div className="col-6">
          <input
            type="text"
            className="form-control flex-grow"
            id="name"
            disabled={true}
            placeholder="Product Name"
            value={item.name}
          ></input>
        </div>
        <div className="col">
          <input
            type="number"
            className="form-control"
            id="qty"
            disabled={!isEditing}
            placeholder="999"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          ></input>
        </div>
        <div className="col">
          <input
            type="number"
            className="form-control"
            id="price"
            disabled={true}
            placeholder="999"
            value={item.price}
          ></input>
        </div>
        <div className="col">
          <button
            className={"btn btn-" + (isEditing ? "success" : "warning")}
            onClick={handleEdit}
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
        <div className="col">
          <button className="btn btn-danger" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
