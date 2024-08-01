import ProductsDisplay from "./product/ProductsDisplay";
import Navbar from "./navbar/Navbar";
import { useState } from "react";

function Home({ onLogout }) {
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

  return (
    <>
      <Navbar
        onCategoryChange={handleCategoryChange}
        onSearch={handleSearch}
        onLogout={onLogout}
      />
      <ProductsDisplay category={selectedCategory} filterText={filterText} />
    </>
  );
}

export default Home;
