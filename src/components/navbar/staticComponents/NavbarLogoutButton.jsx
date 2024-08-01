import useUserSession from "../../../hooks/useUserSession";

const NavbarLogoutButton = () => {
  const [, handleLogout] = useUserSession();

  return (
    <button
      type="button"
      className="btn btn-danger ms-3 me-3"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default NavbarLogoutButton;
