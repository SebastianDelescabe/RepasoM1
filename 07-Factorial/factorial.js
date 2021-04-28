/**
 * Escribe una funcion llamada factorial. Debe retornar el factorial 
 * de un numero.
 * Factoriar es cuando multiplicamos un numeros por todos los que estan 
 * debajo de el.

 * @param {Number} num - esto es number.
 * @returns {Number} - deberia retornar un number.
 */

//  var num = 6
//  var resultado = 0;

function factorial(num) {
  if (num < 2) return num;
  resultado = num * factorial(num - 1);
  return resultado;
}

//  factorial(num)
