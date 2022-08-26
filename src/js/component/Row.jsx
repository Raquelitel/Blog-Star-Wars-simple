import React from "react";
import CardPersonajes from "./CardPersonajes.jsx";
import CardPlanetas from "./CardPlanetas.jsx";


const Row = () => {
  return (
    <div className="container">
      <h2 className="col-12 text-warning m-2">Personajes</h2>
      <div className="d-flex overflow-auto">
        <CardPersonajes/>
      </div>
      <h2 className="col-12 text-warning m-2">Planetas</h2>
      <div className="d-flex overflow-auto">
        <CardPlanetas/>
      </div>
    </div>
  );
};

export default Row;
