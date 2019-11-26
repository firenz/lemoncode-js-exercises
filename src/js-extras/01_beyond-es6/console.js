// --- EJERCICIO ------------------------------------------------------------------------

// A. Intenta razonar cual será el resultado de la consola al ejecutar este código:

var a = 1;
let b = 2;

{
  try {
      console.log(a, b); //error b is out of scope
  } catch(error) {}
  let b = 3;
  console.log(a, b); //1 3
}

console.log(a, b); //1 2

() => {
  console.log(a); //undefined, global a is shadowed by local a
  var a = 5;
  let b = 6;
  console.log(a, b); //5 6
}; // anon funcion never executed, therefore its logs are not displayed in the console

console.log(a, b); //1 2


// B. Sin tocar ninguno de los 'console.log' anteriores, modifica ligeramente el
// código para que muestre la siguiente secuencia:

var a = 1;
let b = 3;

{
  let b = 3;
  try {
      console.log(a, b); //1 3
  } catch(error) {}
  console.log(a, b); //1 3
}

b = 2;
console.log(a, b); //1 2

(() => {
  var a = 5;
  console.log(a); //5
  let b = 6;
  console.log(a, b); //5 6
})();

console.log(a, b); //1 2

// 1 3
// 1 3
// 1 2
// 5
// 5 6
// 1 2
