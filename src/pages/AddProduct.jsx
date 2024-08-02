import Alert from "../components/generic/Alert";
import ProductForm from "../components/product-catalogue/ProductForm";
import useValidateProductForm from "../hooks/useValidateProductForm";
import usePutData from "../hooks/usePutData";
import useRequireLogin from "../hooks/useRequireLogin";

const AddProduct = () => {
  useRequireLogin();
  const [validationObj, handleValidation] = useValidateProductForm();
  const [response, isResponseLoading, responseError, handlePutData] =
    usePutData();

  function handleSubmit(formData) {
    handleValidation(formData);

    if (validationObj?.valid === true) {
      handlePutData("https://fakestoreapi.com/products", formData, false);
    }
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
          alertTitle={"Successfully Added"}
          alertMessage={["Redirecting in 3 seconds"]}
        />
      )}
      <ProductForm onSubmit={handleSubmit} />
    </>
  );
};

export default AddProduct;
