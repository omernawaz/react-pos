import Alert from "../components/generic/Alert";
import ProductForm from "../components/product-catalogue/ProductForm";
import useValidateProductForm from "../hooks/useValidateProductForm";

const AddProduct = () => {
  const [validationObj, handleValidation] = useValidateProductForm();

  function handleSubmit(formData) {
    handleValidation(formData);

    if (validationObj?.valid === true) {
        
    }
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
      <ProductForm onSubmit={handleSubmit} />
    </>
  );
};

export default AddProduct;
