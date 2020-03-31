import { ArvoreBinaria } from "../lib/ArvoreBinaria";

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
// Altura da árvore: 5


const root = new ArvoreBinaria("!");
root.esquerda = new ArvoreBinaria("O");
root.direita = new ArvoreBinaria("o");
root.direita.esquerda = new ArvoreBinaria("l");
root.direita.direita = new ArvoreBinaria("d");
root.direita.direita.esquerda = new ArvoreBinaria("m");
root.direita.direita.esquerda.esquerda = new ArvoreBinaria("á");
root.direita.direita.esquerda.direita = new ArvoreBinaria(" ");
root.direita.direita.direita = new ArvoreBinaria("n");
root.direita.direita.direita.esquerda = new ArvoreBinaria("u");

console.log(root.posOrdemTransversal());
console.log('Altura da árvore:' , root.obterAltura());