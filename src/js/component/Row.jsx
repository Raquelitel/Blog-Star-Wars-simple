import React, { useState } from "react";
import Card from "../component/Card.jsx";

const Row = ({tituloRow}) => {
  const [favorito, setFavorito] = useState(false)
  
  return (
    <div className="mt-4">
      <h2 className="col-12 text-warning">{tituloRow}</h2>
      <div className="col-4">
        <Card 
        favorito={favorito}
        setFavorito={setFavorito}
        tituloRow={tituloRow}/>
      </div>
    </div>
  );
};

export default Row;
