import NavbarLink from "./NavbarLink";

const NavbarDropdown = ({ categories, onCategoryChange, children }) => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {children}
        </a>
        <ul className="dropdown-menu">
          {categories.map((category, index) => (
            <NavbarLink
              key={index}
              category={category}
              onClick={onCategoryChange}
            >
              {category[0].toUpperCase() + category.substr(1)}
            </NavbarLink>
          ))}
        </ul>
      </li>
    </ul>
  );
};

export default NavbarDropdown;
