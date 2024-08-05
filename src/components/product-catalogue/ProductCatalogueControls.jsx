import Dropdown from "../generic/Dropdown";
import SearchBar from "../generic/SearchBar";
import useGetData from "../../hooks/useGetData";
import Button from "../generic/Button";
import { useEffect } from "react";

const ProductCatalogueControls = ({ onCategoryChange, onSearch }) => {
  const [categories, isLoading, , handleFetchData] = useGetData();
  let categoriesLocal = categories;
  useEffect(() => {
    handleFetchData(import.meta.env.VITE_FAKEAPI_CATEGORIES);
  }, []);

  if (
    !isLoading &&
    categories &&
    !categories.find((element) => element === "all")
  ) {
    categoriesLocal = ["all", ...categories];
  }

  return (
    <div className="container-fluid bg-white p-2 pe-5 ps-5 rounded-4">
      <div className="d-flex flex-row">
        <Dropdown
          items={isLoading ? [] : categoriesLocal}
          onItemChange={onCategoryChange}
        >
          Categories
        </Dropdown>
        <SearchBar onSearch={onSearch} />

        <Button
          buttonType={"success"}
          onClick={() => window.location.replace("./add")}
        >
          New Product +
        </Button>
      </div>
    </div>
  );
};

export default ProductCatalogueControls;
