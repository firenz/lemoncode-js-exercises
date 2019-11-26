// --- EJERCICIO ------------------------------------------------------------------------

// El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos
// insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá
// incrementando conforme vayamos jugando.
// Cuando se llame al método play el número de monedas debe incrementar de forma automática y debe generar tres
// booleanos aleatorios. En caso de que los tres booleanos sean true debe un mensaje por consola:
// "Congratulations!!!. You won <número de monedas> coins!!" y reiniciar las monedas almacenadas,
// ya que las hemos conseguido y han salido de la máquina
// En caso contrario deberá mostrar otro mensaje: "Good luck next time!!"

// Ejemplo de uso:
class SlotMachine {
  constructor() {
    this.collectedCoins = 0;
  }

  play() {
    this.collectedCoins++;

    const randomBoolean = () => {
      return Math.random() >= 0.5;
    };

    let result = "";
    if(randomBoolean() && randomBoolean() && randomBoolean()) {
      result = `Congratulations!!!. You won ${this.collectedCoins} coin${(this.collectedCoins > 1) ? "s" : ""}!!`;
      this.collectedCoins = 0;
    }
    else {
      result = `Good luck next time!!`;
    }
    
    return result;
  }
}

const machine1 = new SlotMachine();
// machine1.play(); // "Good luck next time!!"
// machine1.play(); // "Good luck next time!!"
// machine1.play(); // "Congratulations!!!. You won 3 coins!!"
// machine1.play(); // "Good luck next time!!"
// machine1.play(); // "Congratulations!!!. You won 2 coins!!"

console.log(`## EXTRAS - BEYOND ES6 - Slot machine ##
1st play: ${machine1.play()}
2nd play: ${machine1.play()}
3rd play: ${machine1.play()}
4th play: ${machine1.play()}
5th play: ${machine1.play()}`);