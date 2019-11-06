// --- EJERCICIO 01 -- CONCAT  ------------------------------

// Implementa una función concat (inmutable) tal que, dados 2 arrays 
// como entrada, devuelva la concatenación de ambos. 
// Utiliza rest / spread operators.

const concat = (a, b) => { return [...a, ...b]; }; // Implementation here.

// -- OPCIONAL --
// Implementa una versión del ejercicio anterior donde se acepten 
// múltiples arrays de entrada (más de 2).

const concatNArrays = (...arrays) => { return [...arrays]; }; // Implementation here.

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
const array3 = ['a', 'b', 'c'];

console.log(`## Exercise 02 - CONCAT ## 
Original arrays: ${array1} - ${array2} - ${array3}
Concat 2 arrays: ${concat(array1, array2)}
Concant N arrays ${concatNArrays(array1, array2, array3)}`);