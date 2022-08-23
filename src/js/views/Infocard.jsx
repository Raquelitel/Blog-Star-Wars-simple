import React from "react";
import { Link, useParams } from "react-router-dom";

const Infocard = () => {
  const params = useParams();
  console.log(params);
  return (
    <div className="container card border-0 mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/640px-Star_Wars_Logo.svg.png"
            className="img-fluid rounded-start"
            alt="name"
          />
        </div>
        <div className="col-md-8 text-center">
          <div className="card-body">
            <h5 className="card-title text-uppercase">nombre</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
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
          <p>nombre</p>
          <p>luck</p>
        </div>
        <div className="col-2 text-danger text-center">
          <p>Nombre</p>
          <p>luck</p>
        </div>
        <div className="col-2 text-danger text-center">
          <p>Nombre</p>
          <p>luck</p>
        </div>
        <div className="col-2 text-danger text-center">
          <p>Nombre</p>
          <p>luck</p>
        </div>
        <div className="col-2 text-danger text-center">
          <p>Nombre</p>
          <p>luck</p>
        </div>
        <div className="col-2 text-danger text-center">
          <p>Nombre</p>
          <p>luck</p>
        </div>
      </div>
    </div>
  );
};

export default Infocard;
