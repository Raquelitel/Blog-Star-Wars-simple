import React, { useState } from "react";
import CardPersonajes from "./CardPersonajes.jsx";


const Row = () => {

  
  return (
    <div className="container">
      <h2 className="col-12 text-warning m-2">Personajes</h2>
      <div className="d-flex overflow-auto">
        <CardPersonajes/>
      </div>
      <h2 className="col-12 text-warning m-2">Planetas</h2>
      <div className="d-flex overflow-auto">
        <CardPersonajes/>
      </div>
    </div>
  );
};

export default Row;

// d-flex overflow-auto
 // "row row-cols-2 row-cols-md-4 row-col-lg justify-content-center">
 