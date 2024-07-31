const DropdownLink = ({ category, onClick, children }) => {
  return (
    <li>
      <a className="dropdown-item" href="#" onClick={() => onClick(category)}>
        {children}
      </a>
    </li>
  );
};

export default DropdownLink;
