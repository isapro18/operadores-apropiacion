// Calcula una expresión matemática extensa aplicando la precedencia de operadores en JavaScript
let operacion = (20+10)/5+3*2-4*(20 + 10) / 5 + 3 * 2 - 4*(20+10)/5+3*2-4;
// Primero parentesis
operacion = 30/5+3*2-4*30/5 + 3 * 2 - 4*30/5+3*2-4
// Segundp divisiones:
operacion = 6+3*2-4*6 + 3 * 2 - 4*6+3*2-4
// tercero multiplicaciones:
operacion = 6+6-24+6-24+6-4
// Cuarto sumas y restas de izquierda a derecha:
operacion = -28

// Muestra el valor final del contador en una alerta
alert (operacion)