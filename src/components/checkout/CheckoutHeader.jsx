const CheckoutHeader = ({ tid, username }) => {
  return (
    <div className="d-flex flex-row align-items-center justify-content-between p-2 m-2">
      <p>TID: {tid}</p>
      <p>User: {username}</p>
    </div>
  );
};

export default CheckoutHeader;
