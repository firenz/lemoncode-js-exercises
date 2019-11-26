// --- EJERCICIO ------------------------------------------------------------------------

// ¿Cual es la salida de los logs en el siguiente código?
// Intenta razonar, no ejecutes la solución.

var surname = "Pérez";
var person = {
  name: "Juan",
  surname: "González",
  wife: {
    name: "Ana",
    surname: "Jiménez",
    getSurname: function() {
      return this.surname;
    },
  },
};

console.log(person.wife.getSurname()); //Jiménez porque el contexto es wife
var surnameFunction = person.wife.getSurname;
console.log(surnameFunction()); // Pérez porque el contexto es global
console.log(surnameFunction.call(person)); //González porque el contexto es person

// La solución cambia porque el contexto de this cambia
// para que getSurname no cambiase habría que hacer un bind
