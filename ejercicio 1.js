// Constantes
const TRANSPORTE = 120000;
const ALIMENTACION = 150000;
const PERSONAS = 4;
let aporteIndividual = 130000;
const alojamiento = 186000;
// Variables
let total = TRANSPORTE + ALIMENTACION;

let sobrante = (aporteIndividual * PERSONAS) - total;

console.log("Total del viaje:", total);
console.log("Sobrante:", sobrante);
alert("Sobrante: " + sobrante);