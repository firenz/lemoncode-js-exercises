// --- EJERCICIO ------------------------------------------------------------------------

{
  // ¿Sabrías intercambiar el valor de estas 2 variables en una sola línea?
  let a = "A";
  let b = "B";

  // Implementation here, one line, one shot!
  [b, a] = [a, b];

  console.log(`## EXTRAS - BEYOND ES6 - Swap ##`);
  console.log(a === "B" && b === "A" ? "You did it!" : "Keep trying!");
}
