// #### CHALLENGE 03 - ARBOL ####
// ¿Cómo generarías con TypeScript un tipado para estructuras en forma de 
// árbol? Un árbol es una estructura que parte de un nodo raiz, a partir 
// del cual salen más nodos. Cada nodo en un árbol puede tener hijos (más 
// nodos) o no tenerlos (convirtiendose en un nodo final o una "hoja")

interface TreeNode<T> {
  value: T;
  parent?: TreeNode<T>;
  children?: TreeNode<T>[];
  
  getParent(): TreeNode<T>;

  addChild(value: T): void;
  removeChild(child: TreeNode<T>): void;
  getChildren(): TreeNode<T>[];
}

interface Tree<T> {
  root: TreeNode<T>;
  nodes: TreeNode<T>[];

  getRoot(): TreeNode<T>;
  
  getNodesByValue(value: T): TreeNode<T>[];
  getNodeByValue(value: T): TreeNode<T>;
  getValueFromNode(node: TreeNode<T>): T;

  addNode(node: TreeNode<T>): void;
  removeNode(node: TreeNode<T>): void;

  printTree(): void;
}

