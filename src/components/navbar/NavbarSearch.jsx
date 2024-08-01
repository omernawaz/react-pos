import { useState } from "react";

const NavbarSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData();

    formData.append("query", query);

    onSearch(formData);
  }

  return (
    <form className="d-flex" role="search" onSubmit={handleSubmit}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};

export default NavbarSearch;
