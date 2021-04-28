class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if(!this.root){
      this.root = value;
    }
    if(!this.left){
      this.left = insert(value)
    }else{
    }

  }

  find(value) {
    // escribe un metodo que busque un nodo especifico
  }

  size() {
    // escribe un metodo que determine el largo del arbol
  }

  breadthFirstForEach() {
    // escribe el metodo breadthFirstForEach
  }

  depthFirstForEach(arg) {
    // escribe el metodo depthFirstForEach
  }
}
