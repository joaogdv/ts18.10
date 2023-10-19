import { Produto } from "./loja";
import * as leitor from "readline-sync";

let menu: boolean = true;

// Base de dados de Produtos:
let produtos: Produto[] = [];

while (menu) {
  let option = leitor.questionInt(
    "Selecione uma opção:\n1 - Ver base de dados\n2 - Adicionar produto\n3 - Remover produto\n4 - Sair\n:"
  );
  switch (option) {
    case 1:
      if (produtos.length === 0) {
        console.log('A loja não tem produtos disponíveis no momento.');
      } else {
        console.log('Produtos disponíveis na loja:');
        produtos.forEach((produto, index) => {
          console.log(`${index + 1}. Nome: ${produto.nome}, Preço: R$${produto.preco}`);
        });
      }
      break;
    case 2:
      let nome = leitor.question("Digite o nome do produto: ");
      let preco = leitor.questionFloat("Digite o preço do produto: ");
      produtos.push(new Produto(nome, preco));
      console.log("Produto adicionado com sucesso!");
      break;
    case 3:
      let nomeRemover = leitor.question("Digite o nome do produto a ser removido: ");
      let indexRemover = produtos.findIndex((produto) => produto.nome.toLowerCase() === nomeRemover.toLowerCase());
      if (indexRemover !== -1) {
        produtos.splice(indexRemover, 1);
        console.log("Produto removido com sucesso!");
      } else {
        console.log("Produto não encontrado.");
      }
      break;
    case 4:
      console.log("Saindo do sistema");
      menu = false;
      break;
  }
}
