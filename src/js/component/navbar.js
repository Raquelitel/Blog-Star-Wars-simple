import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";
import { BsFillXCircleFill, BsHeartFill } from "react-icons/bs";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-dark bg-dark mb-3">
      <div className="container">
        <Link to="/">
          <img
            className="navbar-brand mb-0 logoSize"
            src="https://es.logodownload.org/wp-content/uploads/2020/09/star-wars-logo-3-11-1024x443.png"
            alt="logo starwars"
          />
        </Link>
        <div className="btn-group">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <BsHeartFill />
          </button>
          <ul className="dropdown-menu dropdown-menu-end menu-size">
            <li className="border-bottom mx-2 my-1 text-center">
              Mis favoritos
            </li>
            {store.favoritos && store.favoritos.length ? (
              store.favoritos.map((fav, i) => (
                <div key={i} className="container">
                  <li className="dropdown-item d-flex align-items-center ">
                    <div className="col-10">
                      <Link
                        to={`/people/${fav.uid}`}
                        className="text-decoration-none text-black">
                        {fav.name}
                      </Link>
                    </div>

                    <button
                      type="button"
                      className="btn btn-warning col align-self-end rounded"
                      onClick={() => {
                        actions.deleteFavorito(fav.name);
                      }}
                    >
                      <BsFillXCircleFill />
                    </button>
                  </li>
                </div>
              ))
            ) : (
              <li className="dropdown-item"></li>
            )}
            <div className="text-center">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => {
                  actions.deleteAll();
                }}
              >
                Eliminar todos
              </button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};
