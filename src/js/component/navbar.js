import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <div className="container">
        <Link to="/">
          <img
            className="navbar-brand mb-0 logoSize"
            src="https://es.logodownload.org/wp-content/uploads/2020/09/star-wars-logo-3-11-1024x443.png"
            alt="logo starwars"
          />
        </Link>
        <div className="dropdown-center dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favoritos
          </button>
          <ul className="dropdown-menu">favoritos nombre</ul>
        </div>
      </div>
    </nav>
  );
};
