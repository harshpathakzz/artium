import React from "react";
import { NavLink } from "react-router-dom";
import { AUTH_TOKEN } from "../../constants/authConstants";
import { ResponsiveNavbar } from "../ResponsiveNavbar/ResponsiveNavbar";
import { useAuth } from "../../contexts";
import { useCart } from "../../contexts/cart-context";
import { useNavbar } from "../../contexts";
import { useWishlist } from "../../contexts/wishlist-context";
import "./Navbar.css";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

function Navbar() {
  const { showNavbar, toggleNavbar } = useNavbar();
  const { auth, setAuth } = useAuth();
  const { wishlist } = useWishlist();
  const {
    cartSummary: { cartTotalProducts },
  } = useCart();

  const signOutHandler = () => {
    localStorage.removeItem(AUTH_TOKEN);
    setAuth((auth) => ({
      ...auth,
      status: false,
      token: null,
    }));
  };

  return (
    <>
      <ResponsiveNavbar />
      <header className="header">
        <nav className="navbar">
          <section className="navbar-brand">
            <span
              className="material-icons navbar-menu-icon"
              onClick={toggleNavbar}
            >
              {showNavbar ? "close" : "menu"}
            </span>
            <NavLink to="/">
              <img
                className="brand-logo"
                src="/assets/shareplate.png"
                alt="shareplate"
              />
            </NavLink>
          </section>
          <section className="navbar-menu">
            <ul className="navbar-links">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "navbar-link-active" : "navbar-link"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "navbar-link-active" : "navbar-link"
                  }
                  to="/products"
                >
                  Donate Food
                </NavLink>
              </li>
            </ul>
          </section>
          <ThemeToggle />
          <section className="navbar-actions">
            <span className="navbar-action">
              <NavLink to="/cart">
                <span className="badge badge-icon">
                  <span className="material-icons navbar-icon">
                    shopping_cart
                  </span>
                  {cartTotalProducts !== 0 && (
                    <span className="badge-content badge-small badge-color badge-right ">
                      {cartTotalProducts}
                    </span>
                  )}
                </span>
              </NavLink>
            </span>
            {/* <span className="navbar-action">
              <NavLink to="/wishlist">
                <span className="badge badge-icon">
                  <span className="material-icons navbar-icon">favorite</span>
                  {wishlist.length !== 0 && (
                    <span className="badge-content badge-small badge-color badge-right ">
                      {wishlist.length}
                    </span>
                  )}
                </span>
              </NavLink>
            </span> */}
            <span className="navbar-action">
              <span className="material-icons navbar-icon">perm_identity</span>
              <ul className="dropdown-content list-simple list-cursor-pointer list-style-none">
                <li>
                  {auth.status ? (
                    <span className="navbar-link" onClick={signOutHandler}>
                      Sign Out
                    </span>
                  ) : (
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "navbar-link-active" : "navbar-link"
                      }
                      to="/signin"
                    >
                      Sign In
                    </NavLink>
                  )}
                </li>
              </ul>
            </span>
          </section>
        </nav>
      </header>
    </>
  );
}

export { Navbar };
