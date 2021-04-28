/**
 * Escribe una funcion llamada productOfArray que reciba un array y 
 * mutiplique cada elemento con el siguiente.
 * Debe retornar el total de la multiplicacion de todos los elementos.

 * @param {Array} arr - esto es un array.
 * @returns {Number} - deberia retornar un number.
 */

// var arr = [2, 2, 3];
// var multiplicacion = 0;

function productOfArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    multiplicacion += arr[i] * arr[i + 1];
  }
  return multiplicacion;
}

// productOfArray(arr);
