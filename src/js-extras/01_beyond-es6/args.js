// --- EJERCICIO ------------------------------------------------------------------------

// Dada la siguiente función:
function f( a, {b} = {}, c = 100 ) {
  console.log( arguments.length );
  console.log(a, a === arguments[0] );
  console.log(b, b === arguments[1] );
  console.log(c, c === arguments[2] );
};

// A. ¿Qué muestra por consola esta llamada?
f("JS rocks!", {"b": "b"});

// ** Solución **
// 2
// "JS rocks!, true"
// "b, false"
// 100, false


// B. ¿Y con estos argumentos?
f({"b": "b"});

// ** Solución **
// 1
// {b: "b"}, true"
// "undefined, true"
// 100, false

// C. ¿Y ahora?
f("JS sucks!", null, 13);

// ** Solución **
// Error: null no tiene propiedades
