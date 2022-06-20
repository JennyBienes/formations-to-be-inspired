const GetApiData = (filterName, filterValue) => {
    return fetch(
        `../images/FormationsToInspire.json'
        //`https://rickandmortyapi.com/api/character/?name=${filterName}&value=${filterValue}`
    )
      .then((response) => {
        console.log ('El Resultado del fetch es', response.status)
          if (response.ok) return response.json();
        else return null;
      })
      .then((data) => {
        if (!data) {
         console.log('El response trajo error, por lo que se devuelve array vacio')
          return [];
        }
        console.log('La cantidad de elementos que encuentra en Api es ', data);
        const ApiData = data.results.map((formations) => {
          return {
            id: formations.id,
            name: formations.name,
            category: formations.category,
            value: formations.value,
            image: formations.image,
          };
        });
  
        console.log(
          'La data extraida para la búsqueda por ',
          filterName,
          filterValue,
          'es:'
        );
  
        return ApiData;
      });
  };
  
  export default GetApiData;