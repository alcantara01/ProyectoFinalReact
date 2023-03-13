const urlCharacters = 'http://api.disneyapi.dev/character';

// con esta función obtenemos todos los personajes
export async function getPersonajes() {
  const respuesta = await fetch(`${urlCharacters}`);
  const personajes = await respuesta.json();
  return personajes;
}

// con esta función obtenemos un personaje sola con su id correspondiente
export async function getPersonaje(id) {
  const respuesta = await fetch(`${urlCharacters}/${id}`);
  const personaje = await respuesta.json();
  return personaje;
}
