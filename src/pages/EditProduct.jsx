import Alert from "../components/generic/Alert";
import ProductForm from "../components/product-catalogue/ProductForm";
import LoadingCard from "../components/product-catalogue/LoadingCard";
import useGetData from "../hooks/useGetData";
import usePutData from "../hooks/usePutData";
import useValidateProductForm from "../hooks/useValidateProductForm";
import { useParams } from "react-router-dom";
import useRequireLogin from "../hooks/useRequireLogin";
import { useState, useEffect } from "react";

const EditProduct = () => {
  useRequireLogin();

  const [formData, setFormData] = useState();
  const [validationObj, handleValidation] = useValidateProductForm();
  const { productId } = useParams();

  const [data, isLoading, error, handleFetchData] = useGetData();

  useEffect(() => {
    handleFetchData(import.meta.env.VITE_FAKEAPI_PRODUCTS + productId);
  }, [productId]);

  const [response, isResponseLoading, responseError, handlePutData] =
    usePutData();

  useEffect(() => {
    if (validationObj?.valid === true) {
      handlePutData(
        import.meta.env.VITE_FAKEAPI_PRODUCTS + productId,
        formData,
        true
      );
    }
  }, [validationObj]);

  function handleSubmit(fromForm) {
    setFormData(fromForm);
    handleValidation(fromForm);
  }

  if (!isResponseLoading && response) {
    setTimeout(() => window.location.replace("../catalogue"), 3000);
  }

  return (
    <>
      {validationObj?.valid === false ? (
        <Alert
          alertType={"danger"}
          alertTitle={validationObj?.response?.title}
          alertMessage={validationObj?.response?.message}
        />
      ) : null}

      {!isLoading && error !== null && (
        <Alert
          alertType={"warning"}
          alertTitle={error.name}
          alertMessage={[error.message]}
        />
      )}

      {!isResponseLoading && responseError && (
        <Alert
          alertType={"warning"}
          alertTitle={responseError.name}
          alertMessage={[responseError.message]}
        />
      )}

      {!isResponseLoading && response && (
        <Alert
          alertType={"info"}
          alertTitle={"Successfully Updated"}
          alertMessage={["Redirecting in 3 seconds"]}
        />
      )}
      {!isLoading ? (
        <ProductForm existingValues={data} onSubmit={handleSubmit} />
      ) : (
        <LoadingCard />
      )}
    </>
  );
};

export default EditProduct;
