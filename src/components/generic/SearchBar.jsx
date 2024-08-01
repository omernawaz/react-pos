import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("query", query);
    onSearch(formData);
  }

  function handleChange(e) {
    setQuery(e.target.value);

    if (e.target.value === "") {
      handleSubmit(e);
    }
  }

  return (
    <form
      className="d-flex flex-grow-1 ms-5 me-5"
      role="search"
      onSubmit={handleSubmit}
    >
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search Catalogue"
        aria-label="Search"
        onChange={handleChange}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
