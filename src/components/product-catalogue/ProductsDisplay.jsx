import ProductCard from "./ProductCard";

const ProductsDisplay = ({ products, onDelete }) => {
  return (
    <div className="d-flex flex-wrap">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          product={product}
          productId={product.id}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default ProductsDisplay;
