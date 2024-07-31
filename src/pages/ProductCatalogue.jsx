import { useEffect, useState } from "react";
import ProductDisplay from "../components/product-catalogue/ProductsDisplay";
import LoadingCard from "../components/product-catalogue/LoadingCard";
import ProductFilter from "../components/product-catalogue/ProductFilter";

function filterProducts(productsArray, filterText) {
  let filteredProducts = [];
  for (let product of productsArray) {
    if (product.title.toLowerCase().indexOf(filterText.toLowerCase()) != -1) {
      filteredProducts.push(product);
    }
  }
  return filteredProducts;
}

const ProductCatalogue = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filterText, setFilterText] = useState("");

  function handleCategoryChange(category) {
    setFilterText("");
    setSelectedCategory(category);
  }

  function handleSearch(formData) {
    const query = formData.get("query");
    setFilterText(query);
  }

  useEffect(() => {
    let fetchLink = "https://fakestoreapi.com/products";
    if (selectedCategory != "all") {
      fetchLink += "/category/" + selectedCategory;
    }

    fetch(fetchLink)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, [selectedCategory]);

  let filteredProducts = filterProducts(products, filterText);

  return (
    <>
      <h1 className="text-center">
        {selectedCategory[0].toUpperCase() +
          selectedCategory.substr(1) +
          " Products"}
      </h1>
      <ProductFilter
        onCategoryChange={handleCategoryChange}
        onSearch={handleSearch}
      />
      <div className="container">
        {filteredProducts.length > 0 ? (
          <ProductDisplay products={filteredProducts} />
        ) : (
          <LoadingCard />
        )}
      </div>
    </>
  );
};

export default ProductCatalogue;
