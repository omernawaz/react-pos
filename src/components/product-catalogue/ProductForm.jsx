import { useEffect, useState } from "react";
import useGetData from "../../hooks/useGetData";
const ProductForm = ({ existingValues, onSubmit }) => {
  const [imageFile, setImageFile] = useState();
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const defaultImage = "https://static.thenounproject.com/png/4595376-200.png";

  const [categories, isLoading] = useGetData(
    "https://fakestoreapi.com/products/categories"
  );

  useEffect(() => {
    setImageFile(null);
    if (existingValues?.image) {
      setImage(existingValues?.image);
    } else if (imageFile instanceof File) {
      setImage(URL.createObjectURL(imageFile));
    } else {
      setImage(defaultImage);
    }
    setTitle(existingValues?.title);
    setPrice(existingValues?.price);
    setDescription(existingValues?.description);
    setCategory(existingValues?.category);
  }, [existingValues]);

  function handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    formData.append("imageFile", imageFile);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category", category);

    onSubmit(formData);
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setImage(imageURL);
    setImageFile(file);
  }

  return (
    <div className="container mt-5 p-5 rounded-5 bg-white">
      <h3 className="text-center mb-5">Product Form</h3>
      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* Image Part of Form */}

          <div className="col border border-dark">
            <div className="row m-4">
              <label htmlFor="image" className="form-label">
                Upload an image
              </label>
              <input
                className="form-control"
                type="file"
                id="image"
                onChange={handleFileChange}
                value={""}
              />
            </div>

            <div className="row m-3">
              <img
                id="img-upload"
                src={image}
                style={{
                  width: "200px",
                  height: "200px",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </div>
          </div>

          {/* Right Side of Form */}

          <div className="col border border-dark">
            <div className="col-md-6 mt-4">
              <label htmlFor="title" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Name of the product"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="col-md-6 mt-2">
              <label htmlFor="price" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                id="price"
                placeholder="Price of product"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="col-md-6 mt-2">
              <label htmlFor="price" className="form-label">
                Category
              </label>
              <select
                className="form-select"
                onChange={(e) => setCategory(e.target.value)}
                defaultValue={category}
              >
                {!isLoading &&
                  categories &&
                  categories.map((category, index) => (
                    <option key={index} value={category}>
                      {category}
                    </option>
                  ))}
              </select>
            </div>
            <div className="col-12 mt-2 mb-5">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="description"
                placeholder="Write a few lines about the product"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary w-25 mt-5"
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
