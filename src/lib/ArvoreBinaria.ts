export class ArvoreBinaria {
  public esquerda?: ArvoreBinaria;
  public direita?: ArvoreBinaria;

  constructor(public valor: any) {}

  toString() {
    return this.valor;
  }

  simetricoTransversal(arvoreBinaria?: ArvoreBinaria): string {
    let retorno = "";

    if (arvoreBinaria === undefined) {
      arvoreBinaria = this.valor;
    }

    if (arvoreBinaria.esquerda) {
      retorno += "(";
      retorno += this.simetricoTransversal(arvoreBinaria.esquerda).toString();
    }

    retorno += arvoreBinaria.toString();

    if (arvoreBinaria.direita) {
      retorno += this.simetricoTransversal(arvoreBinaria.direita).toString();
      retorno += ")";
    }
    return retorno;
  }

  posOrdemTransversal(arvoreBinaria?: ArvoreBinaria): string {
    let retorno = "";

    if (arvoreBinaria === undefined) {
      arvoreBinaria = this;
    }

    if (arvoreBinaria.esquerda) {
      retorno += this.posOrdemTransversal(arvoreBinaria.esquerda).toString();
    }

    if (arvoreBinaria.direita) {
      retorno += this.posOrdemTransversal(arvoreBinaria.direita).toString();
    }

    retorno += arvoreBinaria.toString();

    return retorno;
  }

  obterAltura(arvoreBinaria?: ArvoreBinaria): number {
    if (arvoreBinaria === undefined) {
      arvoreBinaria = this;
    }
    let alturaEsquerda = 0;
    let alturaDireita = 0;

    if (arvoreBinaria.esquerda) {
      alturaEsquerda = this.obterAltura(arvoreBinaria.esquerda);
    }

    if (arvoreBinaria.direita) {
      alturaDireita = this.obterAltura(arvoreBinaria.direita);
    }

    if (alturaDireita > alturaEsquerda) {
      return alturaDireita + 1;
    }
    return alturaEsquerda + 1;
  }
}
