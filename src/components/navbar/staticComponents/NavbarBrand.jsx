const NavbarBrand = ({ imageSource, brandName }) => {
  return (
    <a className="navbar-brand" href="./home">
      <img
        src={imageSource}
        alt="Logo"
        width="30"
        height="24"
        className="d-inline-block align-text-top me-2 ms-2"
      />
      {brandName}
    </a>
  );
};

export default NavbarBrand;
