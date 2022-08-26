import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export const Footer = () => (
  <footer className="footer mt-auto text-center">
    <div className="collapse" id="navbarToggleExternalContent">
      <div className="bg-dark p-4">
        <h5 className="text-white h4">Raquel Martín. 2022</h5>
        <div className="d-flex row justify-content-center">
          <a
            href="https://github.com/raquelitel"
            target="_blank"
            className="text-decoration-none"
          >
            <BsGithub />
            <span className="text-muted m-2">visita mi github</span>
          </a>
          <a
            href="https://linkedin.com/raquelmarca"
            target="_blank"
            className="text-decoration-none"
          >
            <BsLinkedin />
            <span className="text-muted m-2">visita mi linkedin</span>
          </a>
        </div>
      </div>
    </div>
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  </footer>
);
