import ProductCard from "./ProductCard";

const ProductsDisplay = ({ products }) => {
  return (
    <div className="d-flex flex-wrap">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductsDisplay;
