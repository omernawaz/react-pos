import Alert from "../components/generic/Alert";
import ProductForm from "../components/product-catalogue/ProductForm";
import useValidateProductForm from "../hooks/useValidateProductForm";

const EditProduct = () => {
  const [validationObj, handleValidation] = useValidateProductForm();

  function handleSubmit(formData) {
    handleValidation(formData);
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

      <ProductForm
        existingValues={{
          title: "This is a title",
          description: "This is a description",
          price: "55.2",
          image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        }}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default EditProduct;
