/**
 * Escribe una funcion que reciba un array y un numero promedio. 
 * Determina si dentro del array dos numeros dan el promedio pasado.
 * Deberia retornar true si dos numeros sumados dentro del array 
 * es igual al num pasado.

 * @param {Array} arr1 - esto es un array.
 * @returns {Array || undefined} - deberia retornar un array o undefined.
 */


/*  var arr = [-3, 3, -4, 4, -5, 5, 6, 7, 0, 88, -32, 23, 123, 0];*/

function averagePair(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        return true;
      }
    }
  }
  return false;

  //  sumZero(arr)
  //  console.log (arr2);
}
