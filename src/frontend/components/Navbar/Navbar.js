import React from "react";
import { NavLink } from "react-router-dom";
import { AUTH_TOKEN } from "../../constants/authConstants";
import { useAuth, useNavbar } from "../../contexts";
import { ResponsiveNavbar } from "../ResponsiveNavbar/ResponsiveNavbar";
import "./Navbar.css";

function Navbar() {
  const { showNavbar, toggleNavbar } = useNavbar();
  const { auth, setAuth } = useAuth();

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
                src="/assets/Artium512.png"
                alt="Artium"
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
                  Products
                </NavLink>
              </li>
            </ul>
          </section>
          <section className="navbar-actions">
            <span className="navbar-action navbar-search">
              <span className="material-icons navbar-icon navbar-search-icon">
                search
              </span>
            </span>
            <span className="navbar-action">
              <NavLink to="/cart">
                <span className="badge badge-icon">
                  <span className="material-icons navbar-icon">
                    shopping_cart
                  </span>
                  5
                </span>
              </NavLink>
            </span>
            <span className="navbar-action">
              <NavLink to="/wishlist">
                <span className="badge badge-icon">
                  <span className="material-icons navbar-icon"> favorite</span>5
                </span>
              </NavLink>
            </span>
            <span className="navbar-action">
              <span className="badge badge-icon">
                <span className="material-icons navbar-icon">
                  {" "}
                  perm_identity
                </span>
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
              </span>
            </span>
          </section>
        </nav>
      </header>
    </>
  );
}

export { Navbar };
