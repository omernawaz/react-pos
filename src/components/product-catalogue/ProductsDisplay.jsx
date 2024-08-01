import ProductCard from "./ProductCard";

const ProductsDisplay = ({ products }) => {
  return (
    <div className="d-flex flex-wrap">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} productId={product.id} />
      ))}
    </div>
  );
};

export default ProductsDisplay;
