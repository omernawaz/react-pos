import CheckoutHeader from "./CheckoutHeader";
import CheckoutItemDisplay from "./CheckoutItemDisplay";
import CheckoutAddItem from "./CheckoutAddItem";
import CheckoutSummary from "./CheckoutSummary";
import { useState, useEffect } from "react";
import useGetData from "../../hooks/useGetData";
import Alert from "../generic/Alert";

const CheckoutCart = ({ cartId, onDeleteCart }) => {
  const [data, isLoading, error, handleFetchData] = useGetData();
  const [items, setItems] = useState([]);
  const [customError, setCustomError] = useState(null);
  const [fetchTrigger, setFetchTrigger] = useState({
    url: null,
    quantity: null,
  });

  useEffect(() => {
    if (data && !isLoading && !error) {
      let newItem = {
        index: items.length,
        id: data.id,
        name: data.title,
        price: data.price,
        img: data.image,
        quantity: fetchTrigger.quantity,
      };
      setItems((prevItems) => [...prevItems, newItem]);
      setFetchTrigger({ url: null, quantity: null });
      setCustomError(null);
    }
  }, [data, isLoading, error]);

  useEffect(() => {
    if (fetchTrigger.url) {
      handleFetchData(fetchTrigger.url);
    }
  }, [fetchTrigger]);

  async function addNewItem(itemId, quantity) {
    const url = import.meta.env.VITE_FAKEAPI_PRODUCTS + itemId;

    for (const item of Object.values(items)) {
      if (item.id == itemId) {
        setCustomError({
          name: "Duplicate",
          message: "Item Already Added To Cart",
        });
        return;
      }
    }
    setFetchTrigger({ url, quantity });
  }

  function handleAddItem(itemId, quantity) {
    addNewItem(itemId, quantity);
  }

  function handleEditItem(itemIndex, quantity) {
    let newItems = [...items];
    newItems[itemIndex].quantity = quantity;
    setItems(newItems);
  }

  function handleDelete(itemIndex) {
    let newItems = [...items];
    newItems.splice(itemIndex, 1);
    setItems(newItems);
  }

  return (
    <div className="d-flex flex-column p-3 m-3 border border-2 bg-white rounded-3">
      <CheckoutHeader tid={cartId} username={"John Doe"} />
      {customError && (
        <Alert
          alertType={"warning"}
          alertTitle={customError.name}
          alertMessage={[customError.message]}
        />
      )}
      {!isLoading && error && (
        <Alert
          alertType={"danger"}
          alertTitle={error.name}
          alertMessage={[error.message]}
        />
      )}
      <CheckoutAddItem onAdd={handleAddItem} />
      <CheckoutItemDisplay
        items={items}
        cartId={cartId}
        onEdit={handleEditItem}
        onDelete={handleDelete}
      />
      <CheckoutSummary items={items} onDeleteCart={onDeleteCart} />
    </div>
  );
};

export default CheckoutCart;
