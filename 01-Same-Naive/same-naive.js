/**
 * Escribe una function llamada same que acepte dos arrays.
 * La funcion deberia retornar true si cada valor del primer array es 
 * igual al cuadrado de valor del segundo array. 
 * La frecuencia debe ser la misma.

 * @param {Array} arr1 - esto es un array.
 * @param {Array} arr1 - esto es un array.
 * @returns {boolean} - deberia retornar true o false.
 */

function same(arr1, arr2) {
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i] ** 2) {
        return true;
      } else {
        return false;
      }
    }
  }

  // var arr1 = [4,4,4,4,4]
  // var arr2 = [2,2,2,2,2]

  // same(arr1,arr2)


  // function same(arr1, arr2) {

  //   //Saber que ambos arrays tienen el mismo length
  //   if (arr1.length !== arr2.length) {
  //     return false;
  //   }
  
  //   for (let i = 0; i < arr1.length; i++) {
  //     let correctIndex = arr2.indexOf(arr1[i] ** 2);   //INDEXOF PROPIEDAD PARA SABER INDICE INVESTIGARRRR!!!
  //     if (correctIndex === -1) {
  //       return false;
  //     }
  
  //     console.log(arr2);
  //     arr2.splice(correctIndex, 1);
  //   }
  //   return true;
  // }