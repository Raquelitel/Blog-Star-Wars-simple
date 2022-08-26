const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		personajes: [],
		persona: [],
		planetas: [],
		planeta: [],
		vehiculos: [],
		favoritos: [],
		filtrarItem: [],
		isfavorito: [false]
	  },
	  actions: {


		getPersonaje: () => {
		  fetch("https://www.swapi.tech/api/people")
			.then((response) => response.json())
			.then((data) => setStore({personajes: data.results}) )
			.catch((err) => console.error(err));
		},

		getPersona: id => {
			fetch(`https://www.swapi.tech/api/people/${id}`)
			.then(response => response.json())
			.then(data => setStore({persona: data.result.properties}))
			.catch(error => console.log(error))
		},

		getPlanetas: () => {
			fetch("https://www.swapi.tech/api/planets")
			  .then((response) => response.json())
			  .then((data) => setStore({planetas: data.results}) )
			  .catch((err) => console.error(err));
		  },
  
		  getPlaneta: id => {
			  fetch(`https://www.swapi.tech/api/planets/${id}`)
			  .then(response => response.json())
			  .then(data => setStore({planeta: data.result.properties}))
			  .catch(error => console.log(error))
		  },

		addFavoritos: (newfav) => {
			const store = getStore();
			setStore({ favoritos: [newfav,...store.favoritos ],
			isfavorito: [true] })
		},

		deleteFavorito: (personaje) => {
			const store= getStore();
			let newfav = store.favoritos.filter(fav => fav.name !== personaje)
			setStore({favoritos: newfav})
		},

		deleteAll: () => {
			setStore({favoritos: []})
		},

		handleFiltrar: (name) => { 
			const store = getStore();
			const search = store.personajes.filter(
				(personaje) =>
				  personaje.name.toLowerCase().includes(name.toLowerCase())
			  );
			  setStore({filtrarItem: search});
		},

		guardarLS: () => {
			const personajesLS = JSON.parse(localStorage.getItem("personajes")) ?? [];
			setStore({personajes: personajesLS})
		}

	  },
	};
  };
  
  export default getState;
  