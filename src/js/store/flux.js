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
      //   isfavorito: [false],
    },
    actions: {
         getPersonaje: () => {
           fetch("https://www.swapi.tech/api/people")
             .then((response) => response.json())
             .then((data) => {
               setStore({ personajes: data.results });
               localStorage.setItem("personajes",JSON.stringify(data.results));
             })
             .catch((err) => console.error(err));
         },

      getPersona: (id) => {
        fetch(`https://www.swapi.tech/api/people/${id}`)
          .then((response) => response.json())
          .then((data) => {
            setStore({ persona: data.result.properties });
            localStorage.setItem("persona", JSON.stringify(data.result.properties));
          } )
          .catch((error) => console.log(error));
      },

      getPlanetas: () => {
        fetch("https://www.swapi.tech/api/planets")
          .then((response) => response.json())
          .then((data) => {
            setStore({ planetas: data.results })
          localStorage.setItem("planetas", JSON.stringify(data.results));
        })
          .catch((err) => console.error(err));
      },

      getPlaneta: (id) => {
        fetch(`https://www.swapi.tech/api/planets/${id}`)
          .then((response) => response.json())
          .then((data) => {
            setStore({ planeta: data.result.properties })
          localStorage.setItem("planeta", JSON.stringify(data.result.properties));
        })
          .catch((error) => console.log(error));
      },

      addFavoritos: (newfav) => {
        const store = getStore();
        if (store.favoritos.includes(newfav)) continued;
        else {
          setStore({
            favoritos: [newfav, ...store.favoritos],
            //   isfavorito: [true],
          });
        }
      },

      deleteFavorito: (personaje) => {
        const store = getStore();
        let newfav = store.favoritos.filter((fav) => fav.name !== personaje);
        setStore({ favoritos: newfav });
      },

      deleteAll: () => {
        setStore({ favoritos: [] });
      },

      handleFiltrar: (name) => {
        const store = getStore();
        const search = store.personajes.filter((personaje) =>
          personaje.name.toLowerCase().includes(name.toLowerCase())
        );
        setStore({ filtrarItem: search });
      },
      getPersonajesLS: () => {
       const personajesLS =
        JSON.parse(localStorage.getItem("personajes")) ?? [];
      setStore({ personajes: personajesLS }); 
      }, 

      getPersonaLS: () => {
        const personaLS =
         JSON.parse(localStorage.getItem("persona")) ?? [];
       setStore({ persona: personaLS }); 
       }, 

      getPlanetasLS: () => {
        const planetasLS =
         JSON.parse(localStorage.getItem("planetas")) ?? [];
       setStore({ planetas: planetasLS }); 
       }, 

       getPlanetaLS: () => {
        const planetaLS =
         JSON.parse(localStorage.getItem("planeta")) ?? [];
       setStore({ planeta: planetaLS }); 
       }, 

    },
  };
};

export default getState;
