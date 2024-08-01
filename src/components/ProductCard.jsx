const ProductCard = ({ product }) => {
  const truncatedDiscription = product.description.substr(0, 213) + "...";

  return (
    <div className="card p-3 m-3" style={{ width: "18rem" }}>
      <img
        className="align-self-center m-3 p-3"
        src={product.image}
        alt="flag"
        height={150}
      />
      <hr></hr>
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{truncatedDiscription}</p>
      </div>

      <div className="card-footer">
        <div className="d-flex flex-column align-items-center">
          <a href="#" className="btn btn-primary m-3">
            {`Buy ($${product.price})`}
          </a>
          <p className="text-warning">{`Rating: ${product.rating.rate}(${product.rating.count})`}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
