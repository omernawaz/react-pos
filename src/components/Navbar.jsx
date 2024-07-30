import { useState, useEffect } from "react";
import NavbarSearch from "./NavbarSearch";
import NavbarDropdown from "./NavbarDropdown";

const Navbar = ({ onCategoryChange, onSearch }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.push("all");
        setCategories(data);
      });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top me-2 ms-2"
          />
          Fakestore
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavbarDropdown
            categories={categories}
            onCategoryChange={onCategoryChange}
          >
            Categories
          </NavbarDropdown>
          <NavbarSearch onSearch={onSearch} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
