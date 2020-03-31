import { ArvoreBinaria } from "../lib/ArvoreBinaria";

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

const n1 = new ArvoreBinaria("a");
const n2 = new ArvoreBinaria("+");
const n3 = new ArvoreBinaria("*");
const n4 = new ArvoreBinaria("b");
const n5 = new ArvoreBinaria("-");
const n6 = new ArvoreBinaria("/");
const n7 = new ArvoreBinaria("c");
const n8 = new ArvoreBinaria("d");
const n9 = new ArvoreBinaria("e");

n6.esquerda = n7;
n6.direita = n8;
n5.esquerda = n6;
n5.direita = n9;
n3.esquerda = n4;
n3.direita = n5;
n2.esquerda = n1;
n2.direita = n3;

const tree = new ArvoreBinaria(n2);
console.log(tree.simetricoTransversal());
