// Solicita al usuario que ingrese la base del rectángulo y la convierte a número entero
let base = parseInt (prompt ("Ingrese la base:"));
// Solicita al usuario que ingrese la altura del rectángulo y la convierte a número entero
let altura = parseInt (prompt ("Ingrese la altura:"));
// Calcula el área del rectángulo usando la fórmula: base * altura
let area = base * altura;
// Calcula el perímetro del rectángulo usando la fórmula: 2 * (base + altura)
let perimetro = 2 * (base + altura);
// Muestra el resultado del área y el perímetro en una alerta
alert (`El area del rectangulo es: ${area}m y el perimetro es: ${perimetro}m`);