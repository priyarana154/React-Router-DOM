import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/features"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Features
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
};
