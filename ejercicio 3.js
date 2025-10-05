// Constantes
const PRODUCCION_POR_HORA = 250;
const HORAS_TRABAJADAS = 8;
const CAPACIDAD_CAJA = 12;

// Variables
let totalPiezas = PRODUCCION_POR_HORA * HORAS_TRABAJADAS;
let cajasLlenas = Math.floor(totalPiezas / CAPACIDAD_CAJA);
let piezasSueltas = totalPiezas % CAPACIDAD_CAJA;

console.log("Total piezas:", totalPiezas);
console.log("Cajas llenas:", cajasLlenas);
console.log("Piezas sueltas:", piezasSueltas);
alert("Cajas llenas: " + cajasLlenas + ", Piezas sueltas: " + piezasSueltas);