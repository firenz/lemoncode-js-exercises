// --- EJERCICIO ------------------------------------------------------------------------

// En ES7 ya existe una función de manejo de arrays llamada array.includes() que indica si
// un determinado valor figura entre los ítems de un array dado.
// Crear una función en ES5 con el mismo comportamiento. Es decir, una función que reciba
// un array y un valor y devuelva un booleano indicando si el valor está dentro del array.

function includes(array, value) {
  // Implementation here
  return array.indexOf(value) === -1 ? false : true;
}

// Ejemplo:
// console.log(includes([1, 2, 3], 3)) // true
// console.log(includes([1, 2, 3], 0)) // false


// --- CHALLENGE ------------------------------------------------------------------------

// El ejercicio anterior puede quedar simplificado si utilizas una función de los arrays
// que devuelve el índice de un elemento dado.

// TIP: Consulta la documentación en MDN sobre los arrays:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype


const arr = [1, 2, 3];

console.log(`## EXTRAS - FUNDAMENTALS - Includes ##
Original array: ${JSON.stringify(arr)} 
Contains 3? : ${includes(arr, 3)}
Contains 0? : ${includes(arr, 0)}`);
