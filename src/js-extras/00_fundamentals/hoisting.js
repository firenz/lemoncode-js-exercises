// --- EJERCICIO ------------------------------------------------------------------------

// A. ¿Cual crees que será el resultado de la consola y porqué? TIP: escribe el código equivalente.

function f() {
  console.log(a); // undefined
  console.log(g()); //undefined

  var a = "good job!";
  function g() {
    return a;
  }
  console.log(a); // good job!
}

// nada porque la función f() no es llamada y puesta en ejecución

// B. ¿Y ahora?

var maria = 1;

(function() {
  console.log(a); // undefined
  var a = 2;
  luisa = 4;
  var c = 3;
})();

console.log(maria); // 1
console.log(luisa); // 4
console.log(c); // reference error: c is not defined


// C. ¿Y con esta ligera variación?

f(); // undefined porque el hoisting hace que coja la declaración de f() más próxima
var maria = 1;

function f() {
  console.log(maria); // 1
  luisa = 4;
  var c = 3;
}

console.log(maria); // 1
console.log(luisa); // 4
console.log(c); // reference error: c is not defined

// si dejaramos todo tal cual, no se ejecutaría el apartado C porque la ejecución
// del código se pararía en cuanto llega al error de la var c no definida.
// Pero en el caso se que se comentase el apartado B, los valores serían los
// indicados en los laterales
