// --- EJERCICIO ------------------------------------------------------------------------

// Escribe una función que devuelva una lista de valores de todas las propiedades de un objeto:

// Solución
function values(obj) {
  // Implementation here

  // Option 1: with and array and for in loop
  // (challenge is not completed by this way)
  // let values = [];
  // for(let key in obj)
  // {
  //   values.push(obj[key]);
  // }
  // return values;

  // Option 2: with ES2017/ES8 => Object.values()
  return Object.values(obj);
}

// Ejemplo:
// console.log(values({ id: 31, duration: 310, name: "long video", format: "mp4" })); // [31, 310, "long video", "mp4"]

// --- CHALLENGE ------------------------------------------------------------------------

// Evita añadir las propiedades heredadas en caso de ser instancia de una clase:
// Ejemplo:
function Person(name) {
  this.name = name;
}

Person.prototype.walk = function() {
  console.log("I'm walking");
};

{
  var john = new Person("John");
  // console.log(values(john)); // ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]

  const obj = { id: 31, duration: 310, name: "long video", format: "mp4" };

  console.log(`## EXTRAS - FUNDAMENTALS - Values ##
Original object: ${JSON.stringify(obj)} - Values: ${JSON.stringify(
    values(obj)
  )}}
Original object: ${JSON.stringify(john)} - Values: ${JSON.stringify(
    values(john)
  )}`);
}
