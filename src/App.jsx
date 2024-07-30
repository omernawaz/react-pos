import ProductsDisplay from "./components/ProductsDisplay";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filterText, setFilterText] = useState("");
  function handleClick(category) {
    setSelectedCategory(category);
  }

  return (
    <div>
      <Navbar onClick={handleClick} onFilter={setFilterText} />
      <ProductsDisplay category={selectedCategory} filterText={filterText} />
    </div>
  );
}

export default App;
