// #### CHALLENGE 01 - APLANANDO ARRAYS ####
// # Apartado A #
// Dado un array multidimensional, construye una función inmutable que
// devuelva el mismo array aplanado, esto es, con un único nivel de
// profundidad. Por ejemplo, el siguiente array:
const sample = [1, [2, 3], [[4], [5, 6, [7, 8, [9]]]]];

// quedaría aplanado como:
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

const flatArray = (array) => {
  return array.flat(Infinity);
};

console.log(`## Challenge 01 - FLAT ARRAY ##
Original array: ${JSON.stringify(sample)}
Flattened array: ${JSON.stringify(flatArray(sample))}
Original array after function: ${JSON.stringify(sample)}`);

// # Apartado B #
// ¿Has resuelto el ejercicio anterior? Suponiendo que los arrays
// multidimensionales del ejercicio anterior no serán de naturaleza mixta,
// es decir, sus elementos siempre serán del mismo tipo ¿Serías capaz de
// proporcionar un tipado adecuado a dicha función de aplanamiento?

// ** Solución en TypeScript **
// const flatArray = <T>(array: T): T => {
//   return array.flat(Infinity);
// };