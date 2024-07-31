import { useState, useEffect } from "react";

import NavbarSearch from "./NavbarSearch";
import NavbarDropdown from "./NavbarDropdown";
import NavbarBrand from "./staticComponents/NavbarBrand";
import NavbarTogglerButton from "./staticComponents/NavbarTogglerButton";
import NavbarUserGreeting from "./NavbarUserGreeting";
import NavbarLogoutButton from "./staticComponents/NavbarLogoutButton";

const Navbar = ({ onCategoryChange, onSearch, onLogout }) => {
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
        <NavbarBrand
          imageSource={
            "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
          }
          brandName={"FakeStore POS"}
        />
        <NavbarTogglerButton />

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <NavbarDropdown
            categories={categories}
            onCategoryChange={onCategoryChange}
          >
            Categories
          </NavbarDropdown>
          <NavbarUserGreeting />
          <NavbarSearch onSearch={onSearch} />
          <NavbarLogoutButton onLogout={onLogout} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
