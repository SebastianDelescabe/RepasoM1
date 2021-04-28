/**
 * Escribe una function llamada sumZero que acepte un array de numeros 
 * enteros ordenado. La function deberia encontrar el primer para de 
 * numeros que sumados den 0. Retorna un array que incluya los dos 
 * numeros encontrados o undefined si el par no existe..

 * @param {Array} arr1 - esto es un array.
 * @returns {Array || undefined} - deberia retornar un array o undefined.
 */

 var arr2 = [];
 var arr = [-3, 3, -4, 4, -5, 5, 6, 7, 0, 88, -32, 23, 123, 0];
 function sumZero(arr) {
   for (let i = 0; i < arr.length; i++) {
     for (let j = 1; j < arr.length ; j++) {
       if (arr[i] + arr[j] === 0) {
         arr2.push(arr[i],arr[j]);
         return arr2;
       }
     }
   }
   return undefined;
 }
