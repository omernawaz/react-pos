import { useState } from "react";
import ProductDisplay from "../components/product-catalogue/ProductsDisplay";
import LoadingCard from "../components/product-catalogue/LoadingCard";
import ProductCatalogueControls from "../components/product-catalogue/ProductCatalogueControls";
import useGetData from "../hooks/useGetData";
import useRequireLogin from "../hooks/useRequireLogin";
import ErrorPage from "./ErrorPage";

function filterProducts(productsArray, filterText) {
  let filteredProducts = [];
  for (let product of productsArray) {
    if (product.title.toLowerCase().indexOf(filterText.toLowerCase()) != -1) {
      filteredProducts.push(product);
    }
  }
  return filteredProducts;
}

function setFetchLink(selectedCategory) {
  let fetchLink = "https://fakestoreapi.com/products";
  if (selectedCategory != "all") {
    fetchLink += "/category/" + selectedCategory;
  }
  return fetchLink;
}

const ProductCatalogue = () => {
  useRequireLogin();
  //const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filterText, setFilterText] = useState("");

  const [products, isLoading, error] = useGetData(
    setFetchLink(selectedCategory)
  );

  if (error != null) {
    return <ErrorPage error={error} />;
  }

  let filteredProducts = [];

  if (!isLoading) {
    filteredProducts = filterProducts(products, filterText);
  }

  function handleCategoryChange(category) {
    setFilterText("");
    setSelectedCategory(category);
  }

  function handleSearch(formData) {
    const query = formData.get("query");
    setFilterText(query);
  }

  return (
    <>
      <h1 className="text-center bg-white">
        {selectedCategory[0].toUpperCase() +
          selectedCategory.substr(1) +
          " Products"}
      </h1>
      <ProductCatalogueControls
        onCategoryChange={handleCategoryChange}
        onSearch={handleSearch}
      />
      <div className="container">
        {isLoading ? (
          <LoadingCard />
        ) : (
          <ProductDisplay products={filteredProducts} />
        )}
      </div>
    </>
  );
};

export default ProductCatalogue;
