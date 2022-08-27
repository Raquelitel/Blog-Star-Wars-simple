import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { Context } from "../store/appContext";
import "../../styles/card.css";

const CardPersonajes = () => {

const { store, actions } = useContext(Context);

return store.personajes.map(personaje => {
    return (
        <>
          <div 
          key={personaje.uid}
          className="card cardSize m-2">
            <img
              src={require(`../../img/personajes/personaje-${personaje.uid}.jpeg`).default}
              className="card-img-top card-img-size"
              alt={personaje.name}
            />
            <div className="card-body">
              <h5 className="card-title">{personaje.name || "n/a"}</h5>    
              <div className="row">
                <div className="col-9">
                  <Link to={`/people/${personaje.uid}`}>
                    <button className="btn btn-primary">Información</button>
                  </Link>
                </div>
                <div className="col-3 d-flex align-items-center">
                  <button
                    type="button"
                    className="btn"
                    onClick={() => {actions.addFavoritos(personaje)}}
                  >
                    {store.favoritos.includes(personaje) ? <BsHeartFill /> : <BsHeart />}
                  </button>

                </div>
              </div>
            </div>
          </div>
        </>
      );
})

};

export default CardPersonajes;
