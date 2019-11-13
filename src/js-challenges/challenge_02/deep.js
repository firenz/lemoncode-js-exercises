// #### CHALLENGE 02 - ACCESO EN PROFUNDIDAD ####
// # Apartado A #
// Implementa un mecanismo deepGet para acceder en profundidad a objetos 
// anidados, de modo que podamos recuperar una propiedad en cualquiera 
// de sus niveles. Mira a continuación el comportamiento que debería seguir:

const myObject1 = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
      }
    }
  }
};

const deepGet = (object, ...propertyKeysPath) => {
  if(propertyKeysPath.length === 0) return object;
  return propertyKeysPath.reduce((property, key) => {
    return (property && property[key] !== undefined) ? property[key] : undefined;
  }, object);
};

console.log(`## Challenge 02 - Part A - DEEP GET ##
Original object: ${JSON.stringify(myObject1)}
Property x: ${JSON.stringify(deepGet(myObject1, "x"))}
Property a: ${JSON.stringify(deepGet(myObject1, "a"))}
Property b: ${JSON.stringify(deepGet(myObject1, "b"))}
Property c in b: ${JSON.stringify(deepGet(myObject1, "b", "c"))}
Property g in f in d in b: ${JSON.stringify(deepGet(myObject1, "b", "d", "f", "g"))}
Only object: ${JSON.stringify(deepGet(myObject1))}`);

// # Apartado B #
// Ahora implementa el complementario, deepSet , que permita guardar valores
// en profundidad. 

const deepSet = (propertyValue, object, ...propertyKeysPath) => {
  if(propertyKeysPath.length === 0) return object;
  
  let objectPath = object;
  for(let i = 0; i < propertyKeysPath.length - 1; i++) {
    if (objectPath[propertyKeysPath[i]] === undefined) objectPath[propertyKeysPath[i]] = {};
    objectPath[propertyKeysPath[i]][propertyKeysPath[i + 1]] = undefined;
    objectPath = objectPath[propertyKeysPath[i]];
  }
  
  objectPath[propertyKeysPath[propertyKeysPath.length - 1]] = propertyValue;
  return object;
};

// Su comportamiento debería ser:

const myObject2 = {};

console.log(`## Challenge 02 - Part B - DEEP SET ##
Original object: ${JSON.stringify(myObject2)}
Set value 1 in b in a: ${JSON.stringify(deepSet(1, myObject2, "a", "b"))}
Set value 2 in c in a: ${JSON.stringify(deepSet(2, myObject2, "a", "c"))}
Set value 3 in a: ${JSON.stringify(deepSet(3, myObject2, "a"))}
Set value 4 in undefined: ${JSON.stringify(deepSet(4, myObject2))}`);

// {a: { b: 1}}
// {a: { b: 1, c: 2}}
// {a: 3}
// Do nothing // {a: 3}