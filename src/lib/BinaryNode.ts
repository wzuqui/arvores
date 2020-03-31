export class BinaryNode {
  public left?: BinaryNode;
  public right?: BinaryNode;

  constructor(public data: any) {}

  toString() {
    return this.data;
  }

  simetricTraversal(binaryNode?: BinaryNode): string {
    let retorno = "";

    if (binaryNode === undefined) {
      binaryNode = this.data;
    }

    if (binaryNode.left) {
      retorno += "(";
      retorno += this.simetricTraversal(binaryNode.left).toString();
    }

    retorno += binaryNode.toString();

    if (binaryNode.right) {
      retorno += this.simetricTraversal(binaryNode.right).toString();
      retorno += ")";
    }
    return retorno;
  }

  postOrderTraversal(binaryNode?: BinaryNode): string {
    let retorno = "";

    if (binaryNode === undefined) {
      binaryNode = this;
    }

    if (binaryNode.left !== undefined) {
      retorno += this.postOrderTraversal(binaryNode.left).toString();
    }

    if (binaryNode.right) {
      retorno += this.postOrderTraversal(binaryNode.right).toString();
    }

    retorno += binaryNode.toString();

    return retorno;
  }
}
