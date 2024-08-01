import Dropdown from "../generic/Dropdown";
import SearchBar from "../generic/SearchBar";
import useGetData from "../../hooks/useGetData";
import Button from "../generic/Button";

const ProductCatalogueControls = ({ onCategoryChange, onSearch }) => {
  const [categories, isLoading] = useGetData(
    "https://fakestoreapi.com/products/categories"
  );

  if (
    !isLoading &&
    categories &&
    !categories.find((element) => element === "all")
  ) {
    categories.push("all");
  }

  return (
    <div className="container w-50">
      <div className="d-flex flex-row">
        <Dropdown
          items={isLoading ? [] : categories}
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
