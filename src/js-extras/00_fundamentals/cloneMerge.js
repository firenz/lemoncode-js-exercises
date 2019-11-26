// --- EJERCICIO ------------------------------------------------------------------------

// A. Implementa una función clone que devuelva un objeto clonado a partir de otro:
function clone(source) {
  // Implementation here.
  return Object.assign({}, source);
}

// B. Dados dos objetos cualesquiera, implementa una función "merge" que mezcle uno sobre otro.
// El objeto resultante debe ser la mezcla de las propiedades del objeto "source" sobre las
// del objeto "target".
// TIP: Usa la función "clone" del apartado A.

function merge(source, target) {
  // Implementation here.
  let merged = { ...clone(target), ...clone(source) };
  console.log(merged);
}

{
  // Por ejemplo, dados estos 2 objetos:
  let a = { name: "Maria", surname: "Ibañez", country: "SPA" };
  let b = { name: "Luisa", age: 31, married: true };
  // El resultado de mezclar a sobre b sería:
  merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
}
