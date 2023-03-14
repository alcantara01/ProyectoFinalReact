// estas son las dos url que utilizamos
const urlPeliculas = 'http://api.disneyapi.dev/character?films';
const urlPelicula = 'http://api.disneyapi.dev/character?films';

// hacemos un fetch para coger toda la información desde la api de disney
// con esta función obtenemos todas las películas
// esta función es asincrona
export async function getPeliculas() {
  const respuesta = await fetch(`${urlPeliculas}`);
  const peliculas = await respuesta.json();
  return peliculas;
}

// hacemos un fetch para coger toda la información desde la api de disney
// con esta función obtenemos una pelicula sola con su name correspondiente
// esta función es asincrona
export async function getPelicula(name) {
  const respuesta = await fetch(`${urlPelicula}=${name}`);
  const pelicula = await respuesta.json();
  return pelicula;
}
