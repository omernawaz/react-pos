import NavbarBrand from "./staticComponents/NavbarBrand";
import NavbarTogglerButton from "./staticComponents/NavbarTogglerButton";
import NavbarUserGreeting from "./NavbarUserGreeting";
import NavbarLogoutButton from "./staticComponents/NavbarLogoutButton";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={"home"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"checkout"}>
                  Checkout
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"catalogue"}>
                  Catalogue
                </Link>
              </li>
            </ul>
            <NavbarUserGreeting />
            <NavbarLogoutButton />
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
