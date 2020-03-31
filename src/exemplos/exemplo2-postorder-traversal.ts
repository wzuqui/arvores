import { BinaryNode } from "../lib/BinaryNode";

// Desenhando a árvore abaixo:
//
//      '!'
//    /    \
//  'O'    'o'
//        /    \
//      'l'    'd'
//           /     \
//        'm'      'n'
//        /  \     / 
//      'á'  ' ' 'u'

// Resultado deve ser:
// Olá mundo!


const root = new BinaryNode("!");
root.left = new BinaryNode("O");
root.right = new BinaryNode("o");
root.right.left = new BinaryNode("l");
root.right.right = new BinaryNode("d");
root.right.right.left = new BinaryNode("m");
root.right.right.left.left = new BinaryNode("á");
root.right.right.left.right = new BinaryNode(" ");
root.right.right.right = new BinaryNode("n");
root.right.right.right.left = new BinaryNode("u");

console.log(root.postOrderTraversal());