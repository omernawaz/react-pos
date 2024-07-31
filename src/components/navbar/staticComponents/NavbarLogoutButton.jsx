const NavbarLogoutButton = ({ onLogout }) => {
  return (
    <button
      type="button"
      className="btn btn-danger ms-3 me-3"
      onClick={onLogout}
    >
      Logout
    </button>
  );
};

export default NavbarLogoutButton;
