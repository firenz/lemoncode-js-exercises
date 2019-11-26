// --- EJERCICIO ------------------------------------------------------------------------

// Escribe una función que acepte un string como argumento y devuelva todas las partes finales de dicha palabra:

// Solución:
function subsets(word) {
  // Implementation here
  let arraySubSets = new Array(word.length - 1);
  arraySubSets.fill(word.substring(1, word.length), 0, word.length - 1);
  arraySubSets.forEach( (value, index) => {
    value = word.substring(index);
    arraySubSets[index] = value;
  });
  return arraySubSets;
}

// Ejemplo
// console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]


// --- CHALLENGE ------------------------------------------------------------------------

// Repite el ejercicio anterior sin utilizar arrays auxiliares ni bucles for/do/while.

// TIP: Una forma válida de "iterar" es utilizando algún método de los Arrays:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype

const text = "message";

console.log(`## EXTRAS - FUNDAMENTALS - Subsets ##
Original text: ${text}
Subsets: ${JSON.stringify(subsets(text))}`);
