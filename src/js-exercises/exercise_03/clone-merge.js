// --- EJERCICIO 03 -- CLONE Y MERGE  -----------------------

// -- CLONE --
// Implementa una función clone que, a partir de un objeto de entrada 
// source devuelva un nuevo objeto con las propiedades de source :

function clone(source) {
// Implementation here.
  return {...source};
  // return Object.assign({}, source); // Otra forma
}

// -- MERGE --
// Implementa una función merge que, dados dos objetos de entrada source y 
// target, devuelva un nuevo objeto con todas las propiedades de target 
// y de source, y en caso de propiedades con el mismo nombre, 
// source sobreescribe a target. 

function merge(source, target) {
  // Implementation here.
  return {...clone(target), ...clone(source)};
}

const a = {name: "Maria", surname: "Ibañez", country: "SPA"};
const b = {name: "Luisa", age: 31, married: true};

console.log(`## Exercise 03 - CLONE Y MERGE ## 
Original objects: ${JSON.stringify(a)} - ${JSON.stringify(b)}
Merged object: ${JSON.stringify(merge(a, b))}
Original objects after merge: ${JSON.stringify(a)} - ${JSON.stringify(b)}`);

