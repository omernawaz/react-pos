import DropdownLink from "./DropdownLink";

const Dropdown = ({ items, onItemChange, children }) => {
  return (
    <>
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
        {items.map((item, index) => (
          <DropdownLink key={index} category={item} onClick={onItemChange}>
            {item[0].toUpperCase() + item.substr(1)}
          </DropdownLink>
        ))}
      </ul>
    </>
  );
};

export default Dropdown;
