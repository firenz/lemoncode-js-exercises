// --- EJERCICIO ------------------------------------------------------------------------

// Empleando el concepto de closure, emula el comportamiento de 2 dados.
// Utiliza un closure para almacenar el resultado de tirar 2 dados, y encapsula
// junto a estos datos métodos que implementen la funcionalidad de:
// - Hacer reset: poner a undefined o null ambos resultados.
// - Tirar los dados. TIP: Usa Math.random() para tiradas aleatorias.
// - Imprimir el resultado por consola. Ten en cuenta lo siguiente:
//   - Informa al usuario que debe tirar primero cuando corresponda.
//   - Si saca doble 6, ¡dale un premio!

let makeDices = (numberDices, numberFaces) => {
  let dices = [];
  let totalDices = numberDices;
  let dieFaceNumber = numberFaces;

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return {
    throw: () => {
      dices = new Array(totalDices).fill(getRandomInt(1, dieFaceNumber), 0, totalDices);
    },
    reset: () => {
      dices = [];
    },
    print: () => {
      if(dices.length === 0)
      {
        console.log("Throw the dices first!");
      }
      else {
        let result = "Dice 1: " + dices[0];

        for(let i = 1; i < dices.length; i++)
        {
          result += " -- Dice " + (i + 1) + ": " + dices[i];
        }

        if(dices.length === 2 && (dices[0] == dices[1]) && dices[0] === 6) result += " -- Jackpot!";
        console.log(result);
      }
    }
  };
};

console.log(`## EXTRAS - FUNDAMENTALS - Dices ##`);

let twoDice = makeDices(2, 6);
twoDice.print();
twoDice.throw();
twoDice.print();
twoDice.reset();
twoDice.print();

