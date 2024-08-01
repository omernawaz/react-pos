const ProductCard = ({ product, productId }) => {
  const truncatedDiscription = product.description.substr(0, 100) + "...";

  return (
    <div className="card p-3 m-3" style={{ width: "18rem" }}>
      <img
        className="align-self-center m-3 p-3"
        src={product.image}
        alt="flag"
        height={150}
      />
      <div className="card-body">
        <h5 className="card-title" style={{ height: "5rem" }}>
          {product.title}
        </h5>
        <p className="card-text" style={{ height: "6rem" }}>
          {truncatedDiscription}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Price : ${product.price}</li>
        <li className="list-group-item">{`Rating: ${product.rating.rate}(${product.rating.count})`}</li>
      </ul>

      <div className="card-body text-center">
        <a
          href={"./edit/" + productId}
          className="card-link"
          style={{ color: "orange" }}
        >
          Edit
        </a>
        <a href="#" className="card-link" style={{ color: "red" }}>
          Delete
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
