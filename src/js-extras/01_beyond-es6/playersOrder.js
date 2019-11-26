// --- EJERCICIO ------------------------------------------------------------------------

// En una gran cantidad de juegos el sistema de turnos es sencillo, una vez el jugador
// actual ha consumido su turno, pasa al final de la cola y le toca al siguiente.
// Dada una lista inicial de jugadores, implementa una función que devuelva la nueva lista
// de jugadores, en el orden correcto, después de X turnos.
// TIP: Aunque se puede resolver con el operador %, intenta idear una solución usando
// spread/rest & destructuring.

const getPlayersOrder = (players, turns) => {
  let currentPlayer, nextPlayers;
  for(let i = 0; i < turns; i++ ) {
    [currentPlayer, ...nextPlayers] = players;
    players = [...nextPlayers, currentPlayer];
  }

  return players;
}

// Un ejemplo:
// const newOrderIn2Turns = getPlayersOrder(["Ana", "Juan", "Pablo", "Lucia"], 2);
// console.log(newOrderIn2Turns); // ["Pablo", "Lucia", "Ana", "Juan"]

let order = ["Ana", "Juan", "Pablo", "Lucia"];

console.log(`## EXTRAS - BEYOND ES6 - Players order ##
Original order: ${JSON.stringify(order)}
New order: ${JSON.stringify(getPlayersOrder(order, 2))}`);
