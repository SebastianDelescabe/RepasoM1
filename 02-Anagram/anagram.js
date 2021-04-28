/**
 * Dado dos strings, escribe una function para determinar si el 
 * segundo string es un anagrama de el primero.
 * Deberia retornar true si cada letra en el primer string se encuentra 
 * en el segundo string.
 * Un anagrama consiste en crear una palabra a partir de la 
 * reordenación de las letras de otra palabra. 
 * Como cinema y iceman.

 * @param {string} first - esto es un string.
 * @param {string} second - esto es un string.
 * @returns {boolean} - deberia retornar true o false.
 */
 //NO PUDE TERMINAR NO SE COMO UNIRLOS
 function validAnagram(first, second) {
  if (first.length !== second.length) return false;
  let encontre = false; //falto
  for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
      if (first[i] === second[j]) {
        encontre = true; //falto
      }
    }
    if(encontre ===false){  //falto
      return false
    }
    return true;
  }

  //    var first = "panchos";
  //    var second = "nachspn";
  //    validAnagram(first,second)
}
