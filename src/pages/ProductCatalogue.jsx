import { useState, useEffect } from "react";
import ProductDisplay from "../components/product-catalogue/ProductsDisplay";
import LoadingCard from "../components/product-catalogue/LoadingCard";
import ProductCatalogueControls from "../components/product-catalogue/ProductCatalogueControls";
import useGetData from "../hooks/useGetData";
import useRequireLogin from "../hooks/useRequireLogin";
import ErrorPage from "./ErrorPage";
import usePutData from "../hooks/usePutData";
import Modal from "../components/generic/Modal";

function filterProducts(productsArray, filterText) {
  let filteredProducts = [];
  for (let product of productsArray) {
    if (product.title.toLowerCase().indexOf(filterText.toLowerCase()) != -1) {
      filteredProducts.push(product);
    }
  }
  return filteredProducts;
}

function getFetchLink(selectedCategory) {
  let fetchLink = import.meta.env.VITE_FAKEAPI_PRODUCTS;
  if (selectedCategory != "all") {
    fetchLink += "category/" + selectedCategory;
  }
  return fetchLink;
}

const ProductCatalogue = () => {
  useRequireLogin();
  //const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filterText, setFilterText] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState(-1);

  const [products, isLoading, error, handleFetchData] = useGetData();
  const [deleteResponse, isDeleteLoading, deleteError, handlePutData] =
    usePutData();

  useEffect(() => {
    handleFetchData(getFetchLink(selectedCategory));
  }, [selectedCategory]);

  useEffect(() => {
    if (!isDeleteLoading && !deleteError && deleteResponse) {
      console.log(deleteResponse);
      setShowDeleteModal(false);
      setDeleteProductId(-1);
    }
  }, [deleteError, deleteResponse, isDeleteLoading]);

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

  function handleDeleteModal(productId) {
    setShowDeleteModal(true);
    setDeleteProductId(productId);
  }

  function handleCloseModal() {
    setShowDeleteModal(false);
  }

  function handleDelete(productId) {
    handlePutData(
      import.meta.env.VITE_FAKEAPI_PRODUCTS + productId,
      {},
      "DELETE"
    );
  }

  return (
    <>
      {!isLoading && showDeleteModal && (
        <Modal
          onClose={handleCloseModal}
          onConfirm={() => handleDelete(deleteProductId)}
          modalTriggered={showDeleteModal}
          buttonType={"danger"}
          modalTitle={"Attention!"}
          modalBody={`Are you sure you want to delete: "${
            products[deleteProductId - 1].title
          }"`}
          buttonText="Confirm"
        />
      )}
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
          <ProductDisplay
            products={filteredProducts}
            onDelete={handleDeleteModal}
          />
        )}
      </div>
    </>
  );
};

export default ProductCatalogue;
