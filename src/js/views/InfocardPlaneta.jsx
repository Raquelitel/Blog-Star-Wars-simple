import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const Infocard = () => {
  const {store, actions} = useContext(Context)

  const {id} = useParams();

   useEffect(() => {
    actions.getPlaneta(id)
  },[id])

  return (
    <div 
    key={id}
    className="container card border-0 mb-3">
      <div className="row g-0">
        <div className="col-md-4 my-2 d-flex justify-content-center align-items-center">
          <img
            src={require(`../../img/planetas/planeta-${id}.jpeg`).default}
            className="img-fluid rounded"
            alt="name"
          />
        </div>
        <div className="col-md-8 text-center">
          <div className="card-body">
            <h5 className="card-title text-uppercase">{store.planeta.name}</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, saepe exercitationem! Suscipit tempora, perferendis quibusdam deserunt sit velit alias explicabo nostrum accusamus exercitationem obcaecati earum quos nam soluta nisi mollitia?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, saepe exercitationem! Suscipit tempora, perferendis quibusdam deserunt sit velit alias explicabo nostrum accusamus exercitationem obcaecati earum quos nam soluta nisi mollitia?
            </p>
            <Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
          </div>
        </div>
      </div>
      <div className="container row border-top border-danger mt-4 text-capitalize">
        <div className="col-2 text-danger text-center">
          <p>gravedad</p>
          <p>{store.planeta.gravity}</p>
        </div>
        <div className="col-2 text-danger text-center">
          <p>clima</p>
          <p>{store.planeta.climate}</p>
        </div>
        <div className="col-2 text-danger text-center">
          <p>terreno</p>
          <p>{store.planeta.terrain}</p>
        </div>
        <div className="col-2 text-danger text-center">
          <p>diámetro</p>
          <p>{store.planeta.diameter}</p>
        </div>
        <div className="col-2 text-danger text-center">
          <p>Rotación</p>
          <p>{store.planeta.rotation_period}</p>
        </div>
        <div className="col-2 text-danger text-center">
          <p>órbita</p>
          <p>{store.planeta.orbital_period}</p>
        </div>
      </div>
    </div>
  );
};

export default Infocard;
