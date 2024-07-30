import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductsDisplay = ({ category, filterText }) => {
  const [products, setProducts] = useState([]);

  let filteredProducts = [];
  let fetchLink = "https://fakestoreapi.com/products";
  if (category != "all") {
    fetchLink += "/category/" + category;
  }

  useEffect(() => {
    fetch(fetchLink)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, [category, fetchLink]);

  for (let product of products) {
    if (product.title.toLowerCase().indexOf(filterText.toLowerCase()) != -1) {
      filteredProducts.push(product);
    }
  }

  return (
    <div className="container">
      <h1 className="text-center">
        {category[0].toUpperCase() + category.substr(1) + " Products"}
      </h1>
      <div className="d-flex flex-row flex-wrap">
        {products &&
          filteredProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductsDisplay;
