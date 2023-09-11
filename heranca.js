class Pessoa {
  constructor(nome) {
    this.nome = nome;
    this.prioridade = 0; //começa com prioridade 0 por padrão
  }

  definirPrioridade(prioridade) {
    this.prioridade = prioridade;
  }

  toString() {
    //transforma em string
    return `${this.nome} (Prioridade: ${this.prioridade})`;
  }
}

class Cliente extends Pessoa {
  constructor(nome) {
    super(nome);
    this.definirPrioridade(1); //define como prioridade 1 (baixa)
  }
}

class Funcionario extends Pessoa {
  constructor(nome, cargo) {
    super(nome);
    this.cargo = cargo;
    this.definirPrioridade(2); //define a prioridade do funcionário como 2 (média) por padrão
  }

  toString() {
    return `${super.toString()} - ${this.cargo}`;
  }
}
//na prática
const cliente1 = new Cliente("Naju");
const cliente2 = new Cliente("Vitória");
const funcionario1 = new Funcionario("Pedro", "Gerente");
const funcionario2 = new Funcionario("Bianca", "Atendente");

const fila = [cliente1, funcionario1, cliente2, funcionario2];

console.log("Fila de prioridade:");
fila.forEach((pessoa) => {
  console.log(pessoa.toString());
});
