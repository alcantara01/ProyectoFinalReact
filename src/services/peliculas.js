const urlPeliculas = 'http://api.disneyapi.dev/character?films';
const urlPelicula = 'http://api.disneyapi.dev/character?films';

// con esta función obtenemos todas las películas
export async function getPeliculas() {
  const respuesta = await fetch(`${urlPeliculas}`);
  const peliculas = await respuesta.json();
  return peliculas;
}

// con esta función obtenemos una pelicula sola con su name correspondiente
export async function getPelicula(name) {
  const respuesta = await fetch(`${urlPelicula}=${name}`);
  const pelicula = await respuesta.json();
  return pelicula;
}
