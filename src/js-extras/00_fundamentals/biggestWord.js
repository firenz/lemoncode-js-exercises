// --- EJERCICIO ------------------------------------------------------------------------

// Crea una función que reciba una frase en formato string y devuelva la palabra más larga.
// En caso de haber varias con longitud máxima que devuelva siempre la primera. Ten en cuenta
// que consideramos una palabra a aquello que esté separado por espacios.

// TIP: Consulta la documentación en MDN sobre los strings, verás que incorporan muchas
// funciones de utilidad para el manejo y manipulación de strings.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype

function biggestWord(phrase) {
  // Implementation here
	let words = phrase.split(' ').sort((a, b) => b.length - a.length);
	return words[0];
}

// Ejemplo
// console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
// console.log(biggestWord("Ejercicios básicos de JavaScript")); // "Ejercicios"

const phrase1 = "Esta frase puede contener muchas palabras";
const phrase2 = "Ejercicios básicos de JavaScript";

console.log(`## EXTRAS - FUNDAMENTALS - Biggest word ##
Phrase: ${phrase1} - Biggest word: ${biggestWord(phrase1)}
Phrase: ${phrase2} - Biggest word: ${biggestWord(phrase2)}`);
