  function Node(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  }

BinarySearchTree.prototype.insert = function(value) {
  if(!this.root){
    this.root = value;
    return this.root;
  }
  if(value < this.value){
    if(!this.left){
      this.left = new Node(value)
    }else{
      while(this.left){
        this.left = value
      }
    }
  }
}

BinarySearchTree.prototype.find= function(value) {
  // escribe un metodo que busque un nodo especifico
}

BinarySearchTree.prototype.size= function() {
  // escribe un metodo que determine el largo del arbol
}

BinarySearchTree.prototype.breadthFirstForEach= function() {
  // escribe el metodo breadthFirstForEach
}

BinarySearchTree.prototype.depthFirstForEach= function(arg) {
  // escribe el metodo depthFirstForEach
}

