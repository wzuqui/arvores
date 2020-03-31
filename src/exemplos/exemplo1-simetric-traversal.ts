import { BinaryNode } from "../lib/BinaryNode";

// Desenhando a árvore abaixo:
//
//    '+'
//   /   \
//  'a'   '*'
//       /   \
//     'b'   '-'
//          /   \
//        '/'   'e'
//        /  \
//      'c'  'd'

// Resultado deve ser:
// (a + (b * ((c / d) - e)));

const n1 = new BinaryNode("a");
const n2 = new BinaryNode("+");
const n3 = new BinaryNode("*");
const n4 = new BinaryNode("b");
const n5 = new BinaryNode("-");
const n6 = new BinaryNode("/");
const n7 = new BinaryNode("c");
const n8 = new BinaryNode("d");
const n9 = new BinaryNode("e");

n6.left = n7;
n6.right = n8;
n5.left = n6;
n5.right = n9;
n3.left = n4;
n3.right = n5;
n2.left = n1;
n2.right = n3;

const tree = new BinaryNode(n2);
console.log(tree.simetricTraversal());
