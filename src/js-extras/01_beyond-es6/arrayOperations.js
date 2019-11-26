// --- EJERCICIO ------------------------------------------------------------------------

// A.
// Implementa una función head (inmutable), tal que, dado un array como entrada
// extraiga y devuelva su primer elemento. Utiliza destructuring.

const head = ({0: head}) => { return head; }; // Implementation here.


// B.
// Implementa una función tail (inmutable), tal que, dado un array como entrada
// devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = ([, ...tail]) => { return tail; }; // Implementation here.


// C.
// Implementa una función init (inmutable), tal que, dado un array como entrada
// devuelva todos los elementos menos el último. Utiliza los métodos que ofrece
// Array.prototype.

const init = (array) => { return array.slice().splice(array.length - 1, 1); }; // Implementation here.


// D.
// Implementa una función last (inmutable), tal que, dado un array como entrada
// devuelva el último elemento.

const last = (array) => { return array.slice().pop(); }; // Implementation here.


