// #### CHALLENGE 03 - ARBOL ####
// ¿Cómo generarías con TypeScript un tipado para estructuras en forma de 
// árbol? Un árbol es una estructura que parte de un nodo raiz, a partir 
// del cual salen más nodos. Cada nodo en un árbol puede tener hijos (más 
// nodos) o no tenerlos (convirtiendose en un nodo final o una "hoja")

interface TreeNode<T> {
  value: T;
  parent: TreeNode<T>;
  children?: TreeNode<T>[];
}

interface Tree<T> {
  root: TreeNode<T>;
  nodes: TreeNode<T>[];

  getRoot(): TreeNode<T>;
  
  getParent(node: TreeNode<T>): TreeNode<T>;
  getChildren(node: TreeNode<T>): TreeNode<T>[];
  
  addChild(node: TreeNode<T>, value: T): void;
  removeChild(node: TreeNode<T>, child: TreeNode<T>): void;
  
  getNodesByValue(value: T): TreeNode<T>[];
  getNodeByValue(value: T): TreeNode<T>;
  getValueFromNode(node: TreeNode<T>): T;

  addNode(node: TreeNode<T>): void;
  removeNode(node: TreeNode<T>): void;

  printTree(): void;
}

