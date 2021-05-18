function Node() {
    this.val = val;
    this.next = null;
}

function LinkedList() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  LinkedList.prototype.push = function(val) {
    // El metodo push nos permite insertar un nuevo valor AL FINAL
  }

  LinkedList.prototype.pop = function() {
    // El metodo pop nos permite eliminar un nuevo valor AL FINAL
  }

  LinkedList.prototype.shift = function() {
    // El metodo pop nos permite eliminar un nuevo valor AL PRINCIPIO
    if(this.head === null) return null;
    var headBorrado = this.head.value
    this.head = this.head.next
    this._length--
    return headBorrado
  }

  LinkedList.prototype.unshift = function(data) {
    // Esto insertara un nuevo valor AL PRINCIPIO
    if(this.head === null)return null;
    this.head.next = this.head
    this.head = data
  }

  LinkedList.prototype.get = function(index) {
    // Ya que estas listas no poseen indice este es un metodo artificial para crearle uno.
  }

  LinkedList.prototype.set = function(index, data) {
    // Este metodo nos permite reemplazar un valor existente en el indice que le indicamos
  }

  LinkedList.prototype.insert = function(index, data) {
    // Este metodo nos permite insertar un nuevo nodo en CUALQUIER parte de la lista
  }

  LinkedList.prototype.remove = function(index) {
    //Esto nos permite eliminar un valor en CUALQUIER parte de la lista
  }

  LinkedList.prototype.reverse = function() {
    // revierte esta lista
  }

  LinkedList.prototype.posicion = function (value) {
    //devuelve el valor de una posicion pasada por parametro
    var contador = 1;
    
    if (value <= 0) return null;
    
    var current = this.head;
    while (value !== contador) {
        current = current.next;
        contador++;
    }
    if (current === null) {
        return null;
    } else {
        var elemento = current.value;
        return elemento;
    }
    };
