// Solicita al usuario que ingrese la primera nota y la convierte a número decimal
let nota1 = parseFloat(prompt("Ingresa la primera nota:"));
// Solicita al usuario que ingrese la segunda nota y la convierte a número decimal
let nota2 = parseFloat(prompt("Ingresa la segunda nota:"));
// Solicita al usuario que ingrese la tercera nota y la convierte a número decimal
let nota3 = parseFloat(prompt("Ingresa la tercera nota:"));
// Calcula el promedio de las tres notas
let promedio = (nota1 + nota2 + nota3) / 3;
// Muestra el promedio en una ventana emergente (alerta)
alert(`El promedio de las notas es: ${promedio}`);
// También imprime el promedio en la consola del navegador (útil para depuración)
console.log (`El promedio de las notas es: ${promedio}`)