import { useEffect, useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    let formData = new FormData();
    formData.append("query", query);
    onSearch(formData);
  };

  useEffect(() => {
    if (query === "") {
      handleSearch();
    }
  }, [query]);

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch();
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
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
