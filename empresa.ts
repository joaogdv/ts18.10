class EmpresaDesenvolvimento {
    nome: string;
    endereco: string;
    funcionarios: Funcionario[];
  
    constructor(nome: string, endereco: string) {
      this.nome = nome;
      this.endereco = endereco;
      this.funcionarios = [];
    }
  
    adicionarFuncionario(funcionario: Funcionario): void {
      this.funcionarios.push(funcionario);
    }
  
    removerFuncionario(funcionario: Funcionario): void {
      const index = this.funcionarios.indexOf(funcionario);
      if (index !== -1) {
        this.funcionarios.splice(index, 1);
      }
    }
  
    exibirInformacoesEmpresa(): void {
      console.log(`Nome da Empresa: ${this.nome}`);
      console.log(`Endereço: ${this.endereco}`);
      console.log('Funcionários:');
      if (this.funcionarios.length === 0) {
        console.log('A empresa não possui funcionários no momento.');
      } else {
        this.funcionarios.forEach((funcionario, index) => {
          console.log(`${index + 1}. Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}`);
        });
      }
    }
  }
  
  class Funcionario {
    nome: string;
    cargo: string;
  
    constructor(nome: string, cargo: string) {
      this.nome = nome;
      this.cargo = cargo;
    }
  }
  
  const minhaEmpresa = new EmpresaDesenvolvimento('Minha Empresa de Desenvolvimento', 'Rua Principal, 123');
  
  const funcionario1 = new Funcionario('João', 'Desenvolvedor');
  const funcionario2 = new Funcionario('Maria', 'Designer');
  
  minhaEmpresa.adicionarFuncionario(funcionario1);
  minhaEmpresa.adicionarFuncionario(funcionario2);
  
  minhaEmpresa.exibirInformacoesEmpresa();
  
  minhaEmpresa.removerFuncionario(funcionario2);
  
  minhaEmpresa.exibirInformacoesEmpresa();
  