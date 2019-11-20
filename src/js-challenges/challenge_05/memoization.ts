// #### CHALLENGE 05 - MEMOIZATION ####
// # Apartado A #
// Implementa un mecanismo de memoización para funciones costosas y tipalo con 
// TypeScript. La memoización optimiza sucesivas llamadas del siguiente modo:

const expensiveFunction = () => {
  console.log("Una única llamada");
  return 3.1415;
}

//NOTA: Puedes suponer que las funciones que van a ser memoizadas no llevan 
// argumentos y tampoco devuelven valores null o undefined.

type PrimitiveType = number | string | boolean;
type NonNullableType = NonNullable< PrimitiveType | object >;
type NoArgumentsFunctionType = () => NonNullableType;

const memoize = (fn: NoArgumentsFunctionType): NoArgumentsFunctionType => { 
  let cache: NonNullableType;
  return () => {
    if(cache) return cache;

    let result = fn();
    cache = result;
    return result;
  }
};

const memoized = memoize(expensiveFunction);

console.log(`## Challenge 05_A - BASIC MEMOIZATION ##
1st call : ${memoized()}
2nd call : ${memoized()}
3rd call : ${memoized()}`);

// Una única llamada // 3.1415
// 3.1415
// 3.1415

// # Apartado B #
// ¿Podrías hacerlo en una sola línea?

const memoizeOneLiner = (fn: NoArgumentsFunctionType, cache: PrimitiveType | object = undefined): NoArgumentsFunctionType => { 
  return () => { return (cache) ? cache : cache = fn(); }
};

const memoizedOneLiner = memoizeOneLiner(expensiveFunction);

console.log(`## Challenge 05_B - MEMOIZATION ONE LINER ##
1st call :  ${memoizedOneLiner()}
2nd call :  ${memoizedOneLiner()}
3rd call :  ${memoizedOneLiner()}`);

// # Apartado C #
// Contempla ahora la posibilidad de que la función a memoizar pueda tener 
// argumentos. Por simplicidad supongamos sólo argumentos primitivos: string , 
// number o boolean y que no sean undefined. ¿Podrías hacer una versión aceptando 
// argumentos? ¿Cómo la tiparías con TS? Un ejemplo de comportamiento podría ser:

let count = 0; // Comprobacion de no de ejecuciones
const repeatText = (repetitions: number, text: string): string =>
  (count++, `${text} `.repeat(repetitions).trim())

type ArgumentsFunctionType = (...args: PrimitiveType[]) => PrimitiveType

const memoizeArgs = (fn: ArgumentsFunctionType): any => { 
  let cache: object = {};

  return (...args: PrimitiveType[]) => {
    let keys: any = args;

    if(keys in cache) return cache[keys];
    return cache[keys] = fn(...args);
  }
};

const memoizedGreet = memoizeArgs(repeatText);

console.log(`## Challenge 05_C - MEMOIZATION  WITH ARGUMENTS ##
1st call :  ${memoizedGreet(1, "pam")}
2nd call :  ${memoizedGreet(3, "chun")}
3rd call :  ${memoizedGreet(1, "pam")}
4th call :  ${memoizedGreet(3, "chun")}
Call counts: ${count}`);

// pam
// chun chun chun
// pam
// chun chun chun
// 2