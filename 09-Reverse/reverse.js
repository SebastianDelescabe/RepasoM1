/**
 * Escribe una funcion llamada reverse que acepte un string.
 * Debe retornar el string a la inversa.

 * @param {String} str - esto es un string.
 * @returns {String} - deberia retornar un string.
 */

//split convierte string en array
//reverse Da vuelta un array
//join une un array

function reverse(str) {
  return str.split("").reverse().join("");
}
