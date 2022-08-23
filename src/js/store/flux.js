const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		personajes: [],
		planetas: [],
		vehiculos: [],
	  },
	  actions: {
		getPersonaje: () => {
		  const options = {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		  };
  
		  fetch("https://www.swapi.tech/api/people", options)
			.then((response) => response.json())
			.then((data) => setStore({personajes: data.results}) )
			.catch((err) => console.error(err));
		},
	  },
	};
  };
  
  export default getState;
  