import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { Context } from "../store/appContext";
import "../../styles/card.css";

const CardPlanetas = () => {

const { store, actions } = useContext(Context);

return store.planetas.map(planeta => {
    return (
        <>
          <div 
          key={planeta.uid}
          className="card cardSize m-2">
            <img
              src={require(`../../img/planetas/planeta-${planeta.uid}.jpeg`).default}
              className="card-img-top card-img-size"
              alt={planeta.name}
            />
            <div className="card-body">
              <h5 className="card-title">{planeta.name || "n/a"}</h5>    
              <div className="row">
                <div className="col-9">
                  <Link to={`/planets/${planeta.uid}`}>
                    <button className="btn btn-primary">Información</button>
                  </Link>
                </div>
                <div className="col-3 d-flex align-items-center">
                  <button
                    type="button"
                    className={`btn ${store.isfavorito ? "btn-outline-warning" : ""}`}
                    onClick={() => {actions.addFavoritos(planeta)}}
                  >
                    {store.isfavorito ? <BsHeartFill /> : <BsHeart />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      );
})

};

export default CardPlanetas;
