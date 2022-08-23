import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { Context } from "../store/appContext";
import "../../styles/card.css";

const Card = ({
  favorito,
  setFavorito,
  name,
  colorEyes,
  gender,
  height,
  climate,
  gravity,
  model,
  vehicle_class,
  tituloRow,
}) => {

  const {store, actions} = useContext(Context)

  useEffect(() => {
    actions.getPersonaje();
    console.log(store)
  },[])

  
  return (
    <>
      <div className="card cardSize">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/640px-Star_Wars_Logo.svg.png"
          className="card-img-top"
          alt={name}
        />
        <div className="card-body">
          <h5 className="card-title">{name || "n/a"}</h5>
          {
            {
              Personajes: (
                <div>
                  <p className="card-text m-0">Color de ojos: {colorEyes || "n/a"}</p>
                  <p className="card-text m-0">Género: {gender || "n/a"}</p>
                  <p className="card-text m-0">Altura {height || "n/a"}</p>
                </div>
              ),
              Planetas: (
                <div>
                  <p className="card-text m-0">Clima: {climate || "n/a"}</p>
                  <p className="card-text m-0">Gravedad {gravity || "n/a"}</p>
                </div>
              ),
              Vehículos: (
                <div>
                  <p className="card-text m-0">Modelo: {model || "n/a"}</p>
                  <p className="card-text m-0">Tipo: {vehicle_class || "n/a"}</p>
                </div>
              ),
            }[tituloRow]
          }

          <div className="row mt-2">
            <div className="col-9">
              <Link to="/infocard/1">
                <button className="btn btn-primary">Leer +</button>
              </Link>
            </div>
            <div className="col-3 d-flex align-items-center">
              <button
                type="button"
                className={`btn ${favorito ? "btn-outline-warning" : ""}`}
                onClick={() => {
                  setFavorito(!favorito);
                }}
              >
                {favorito ? <BsHeartFill /> : <BsHeart />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
