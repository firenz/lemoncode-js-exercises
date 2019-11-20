// --- EJERCICIO 01 -- ARRAY OPERATIONS  -----------------------

const array = [1, 2, 3, 4];

// --- HEAD -----------------

// Implementa una función head (inmutable), tal que, dado un array como
// entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const head = (/*[head, ...tail]*/ {0: head}) => { return head; }; // Implementation here.

console.log(`## Exercise 01_01 - HEAD ## 
Original array: ${array} -- Result: ${head(array)}`);

// --- TAIL -----------------

// Implementa una función tail (inmutable), tal que, dado un array como 
// entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = ([, ...tail]) => { return tail;}; // Implementation here.

console.log(`## Exercise 01_02 - TAIL ## 
Original array: ${array} -- Result: ${tail(array)}`);

// --- INIT -----------------

// Implementa una función init (inmutable), tal que, dado un array 
// como entrada devuelva todos los elementos menos el último. 
// Utiliza los métodos que ofrece Array.prototype.

const init = (array) => { return array.slice().splice(0, array.length - 1); };  // Implementation here.

console.log(`## Exercise 01_03 - INIT ## 
Original array: ${array} -- Result: ${init(array)}`);

// --- LAST -----------------

// Implementa una función last (inmutable), tal que, dado un array 
// como entrada devuelva el último elemento.

const last = (array) => { return array.slice().pop(); }; // Implementation here.

console.log(`## Exercise 01_04 - LAST ## 
Original array: ${array} -- Result: ${last(array)}`);