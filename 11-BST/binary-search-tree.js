function Node(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  }

BinarySearchTree.prototype.insert = function(value) {   //Hecho con root
  var nodo = new Node(value)
  if(!this.root){
    this.root = nodo;
    return this.root;
  }
  if(nodo < this.value){
    if(!this.left){
      this.left = new Node(value)
    }else{
      this.left = insert(value)
    }
  }else{
    if(!this.right){
      this.right = new Node(value)
    }else {
      this.right = insert(value)
    }
  }
}

// var arbolito = new BinarySearchTree()
// arbolito.insert(20)
// arbolito.insert(15)
// arbolito.insert(25)
// arbolito.insert(10)
// arbolito.insert(30)

BinarySearchTree.prototype.find= function(value) {
  var nodo = new Node(value)
  if(nodo === this.value) return true;
  
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

