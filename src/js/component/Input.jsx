import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Input = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="d-flex justify-content-center">
      <div className="col col-lg-5 mx-2">
        <input
          type="text"
          placeholder="Buscar..."
          className="rounded form-control "
          onChange={(e) => {
            actions.handleFiltrar(e.target.value);
          }}
          value={store.filtrarItem.name}
        />

        {store.filtrarItem.length && (
          <div className="bg-white overflow-scroll opacity-50">
            {store.filtrarItem.map((personaje, i) => {
              console.log(personaje)
              return (
                <p key={i}
                className="text-white text-center mt-1"
                >
                  <Link to={`/people/${personaje.uid}`}
                  className="text-decoration-none text-black">
                  {personaje.name}
                  </Link>
                
                </p>
              );
            })}
          </div>
        ) }
      </div>
    </div>
  );
};

export default Input;
