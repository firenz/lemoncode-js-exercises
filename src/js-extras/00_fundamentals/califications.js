// --- EJERCICIO ------------------------------------------------------------------------

// [!] NOTA: Realiza primero el ejercicio "values".

// Dada la calificación de alumnos de una clase en forma de objeto como el siguiente:

const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

// Implementa una función que muestre la media de la clase de forma textual, es decir, siguiendo
// el sistema de calificación español:
// Matrícula de Honor = 10
// Sobresaliente = entre 9 y 10
// Notable = entre 7 y 9
// Bien = entre 6 y 7
// Suficiente = entre 5 y 6
// Insuficiente = entre 4 y 5
// Muy deficiente = por debajo de 4

function printAverage(classResults) {
  // Implementation here.
  let califications = Object.values(classResults);
  let average = califications.reduce((a, b) => a + b) / califications.length;
  return average + printSpanishCalification(average);
}

function printSpanishCalification(calification){
  if(calification === 10) return " - Matrícula de Honor";
  else if (calification >= 9.0) return " - Sobresaliente";
  else if (calification >= 7.0) return " - Notable";
  else if (calification >= 6.0) return " - Bien";
  else return "";
}

// console.log(printAverage(eso2o));

// TIP: Rompe en tantas funciones auxiliares como necesites.
// TIP: Utiliza el ejercicio "values" para extraer los valores de un objeto.
// En Array.prototype también cuentas con otro método que podría serte de utilidad
// para transformar un array a un único valor.

console.log(`## EXTRAS - FUNDAMENTALS - Califications ##
Alumns: ${JSON.stringify(eso2o)}
-------------
Average calification of class: ${printAverage(eso2o)}`);
