import ProductsDisplay from "./components/ProductsDisplay";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";

function App() {
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
    <div>
      <Navbar onCategoryChange={handleCategoryChange} onSearch={handleSearch} />
      <ProductsDisplay category={selectedCategory} filterText={filterText} />
    </div>
  );
}

export default App;
