// --- CHALLENGE ------------------------------------------------------------------------

// Vamos a crear... ¡un transmisor Morse!

// DESCRIPCION:
// el ejercicio consiste en, dado cualquier mensaje de entrada, representar por
// consola el estado de las señales morse que resultan de transmitir dicho mensaje.
// Para facilitarte la tarea piensa en la típica bombilla de un transmisor morse:
//   - Cuando recibe un punto, se enciende brevemente.
//   - Cuando recibe una raya, se enciende más prolongadamente.
//   - El tiempo que la bombilla permance apagada ayuda a discernir la separación
//     entre letras y también entre palabras.
// Por tanto, la salida por consola será una sucesión de estados: ON/OFF, Encendido/Apagado,
// 1/0, como prefieras.

// IMPLEMENTACIÓN:
// Para ello tendremos que implementar una factoría de transmisores. Recuerda que una
// factoría es una función que devuelve un objeto o clase. Esa decisión es a tu elección,
// la entidad transmisor podrá ser objeto o clase, como prefieras.
// Esta factoría necesita una serie de "ingredientes" para configurar el transmisor:
// - Un mapa que traduzca de carácter a su representación morse. Sírvete del objeto
// auxiliar 'morseAlphabet' que se adjunta más abajo.
// - Una función que implemente un mecanismo de timeout para espaciar los símbolos a
// transmitir. Este mecanismo será como un setTimeout con la diferencia de que en lugar de
// tomar milisegundos como entrada, será el número de puntos a esperar. Un punto, como
// explicaremos más abajo, es la unidad temporal básica de referencia.
// - Un función `writer` que será la encargada de escribir por consola el estado de nuestra
// bombilla. Usa ON/OFF, 1/0 o lo que prefieras.
// - Un callback para cuando el mensaje se haya terminado de transmitir completamente.
// La entidad transmisor deberá tener una función para transmitir el mensaje deseado,
// que admita dicho mensaje como parámetro.
// NOTA: Utiliza Typescript y proporciona un tipado lo más completo posible.

// TIMING:
// La unidad temporal de referencia será la duración de 1 punto en lugar de trabajar
// en milisegundos. La duración real en ms. de dicho punto es a tu elección, puede ser
// de 50ms o de 1seg. si estás haciendo pruebas y quieres ir despacio.
// Dicho esto deberás saber que, en morse:
// - La duración de 1 punto es la referencia temporal.
// - Las rayas duran 3 puntos.
// - La separación entre cada punto o cada raya es también de 1 punto.
// - La separación entre letras es de 3 puntos.
// - La separación entre palabras es de 7 puntos.

// Más info sobre el código Morse:
// https://en.wikipedia.org/wiki/Morse_code

// Objeto auxiliar:
const morseAlphabet = {
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
};

interface MorseAlphabet {
  [key: string]: string;
}

type StartTransmissionFunction = (
  message: string,
  morseAlphabet: MorseAlphabet
) => Promise<any>;
type EndTrasmissionFunction = () => any;
type WriterFunction = (isOn: boolean) => void;
type DelayFunction = (
  callback: (...args: any[]) => void,
  timePoint: number
) => NodeJS.Timeout;
type Transmission = (() => Promise<any>)[];

interface MorseTransmitter {
  morseAlphabet: MorseAlphabet;
  startTransmission: StartTransmissionFunction;
}

const endTransmission = (): void => {
  console.log(`--- END OF TRANSMISSION ---`);
};

const writer = (isOn: boolean): any => {
  let timeStamp: Date = new Date();
  console.log(`[${timeStamp.toLocaleTimeString()}] ${isOn ? "ON" : "OFF"}`);
};

const delay = (
  callback: (...args: any[]) => void,
  timePoint: number
): NodeJS.Timeout => {
  const baseWaitingTime: number = 1000;
  return setTimeout(callback, timePoint * baseWaitingTime);
};

const morseTransmitterFactory = (
  morseAlphabet: MorseAlphabet,
  writer: WriterFunction,
  delay: DelayFunction,
  endTransmission: EndTrasmissionFunction
) => {

  const generateTransmission = (
    convertedMessage: string,
    writer: WriterFunction,
    delay: DelayFunction,
    endTransmission: EndTrasmissionFunction
  ): (() => Promise<any>)[] => {
    let transmission: Transmission = [];
    convertedMessage
      .slice()
      .split("")
      .forEach(element => {
        switch (element) {
          case " ":
            transmission.push(
              () => 
              new Promise(resolve => {
                writer(false);
                delay(resolve, 1);
              })
            );
            break;
          case ".":
            transmission.push(
              () => 
              new Promise(resolve => {
                writer(true);
                delay(resolve, 1);
              })
            );
            break;
          case "-":
            transmission.push(
              () => 
              new Promise(resolve => {
                writer(true);
                delay(resolve, 3);
              })
            );
            break;
          case "%":
            transmission.push(
              () => 
              new Promise(resolve => {
                writer(false);
                delay(resolve, 3);
              })
            );
            break;
          case "#":
            transmission.push(
              () => 
              new Promise(resolve => {
                writer(false);
                delay(resolve, 7);
              })
            );
            break;
          case "$":
            transmission.push(
              () => 
              new Promise(resolve => {
                writer(false);
                resolve(endTransmission());
              })
            );
            break;
        }
      });

    return transmission;
  };

  const convertMessage = (
    originalMessage: string,
    morseAlphabet: MorseAlphabet
  ): string => {
    return originalMessage
      .slice()
      .toLowerCase()
      .split(" ")
      .map(element => (element = wordToMorse(element, morseAlphabet)))
      .join("#")
      .concat("$");
  };

  const charToMorse = (char: string, morseAlphabet: MorseAlphabet): string => {
    return morseAlphabet[char].split("").join(" ");
  };

  const wordToMorse = (word: string, morseAlphabet: MorseAlphabet): string => {
    return word
      .slice()
      .split("")
      .map(element => (element = charToMorse(element, morseAlphabet)))
      .join("%");
  };

  const morseTransmitter = {
    morseAlphabet,
    startTransmission: async (message: string): Promise<any> => {
      const convertedMessage: string = convertMessage(message, morseAlphabet);

      console.log(`## EXTRAS - EXTRA - Morse Code ##
      Original message: ${message}
      --- TRANSMISSION START ---`);

      let transmission: Transmission = generateTransmission(convertedMessage, writer, delay, endTransmission);

      for (let i = 0; i < transmission.length; i++) {
        await transmission[i]();
      }
    }
  };

  return morseTransmitter;
};

const morseTransmitter = morseTransmitterFactory(
  morseAlphabet,
  writer,
  delay,
  endTransmission
);

morseTransmitter.startTransmission("Hello world!");
