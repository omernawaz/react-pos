import Dropdown from "../generic/Dropdown";
import SearchBar from "../generic/SearchBar";
import { useEffect, useState } from "react";

const ProductFilter = ({ onCategoryChange, onSearch }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.push("all");
        setCategories(data);
      });
  }, []);

  return (
    <div className="container w-50">
      <div className="d-flex flex-row">
        <Dropdown items={categories} onItemChange={onCategoryChange}>
          Categories
        </Dropdown>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
};

export default ProductFilter;
