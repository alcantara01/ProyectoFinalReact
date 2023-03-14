// esta es la url que utilizamos
const urlCharacters = 'http://api.disneyapi.dev/characters';

// hacemos un fetch para coger toda la información desde la api de disney
// con esta función obtenemos todos los personajes
// esta función es asincrona
export async function getPersonajes() {
  const respuesta = await fetch(`${urlCharacters}`);
  const personajes = await respuesta.json();
  return personajes;
}

// hacemos un fetch para coger toda la información desde la api de disney
// con esta función obtenemos un sólo personaje con su id correspondiente
// esta función es asincrona
export async function getPersonaje(id) {
  const respuesta = await fetch(`${urlCharacters}/${id}`);
  const personaje = await respuesta.json();
  return personaje;
}
