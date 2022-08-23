import React from "react";
import Row from "../component/Row.jsx";
import "../../styles/home.css";

export const Home = () => {

	const titulos = ["Personajes", "Planetas", "Vehículos"]

  return (
    <div className="container-fluid">
		{titulos.map(titulo => (
			<Row tituloRow={titulo}/>
		))}
    </div>
  );
};
