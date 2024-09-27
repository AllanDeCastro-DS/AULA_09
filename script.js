let pessoa = {
  nome: "Allan",
  sobrenome: "Castro",
  idade: 17,
  altura: 1.65,
  cargo: "Estudante",
};

console.log(pessoa);
//consumindo uma caracteristica do objeto

console.log(pessoa.nome);
console.log(pessoa.altura);

let carro = {
  nome: "Brasilia",
  cor: "Amarelo",
  potencia: "80cv",
};

console.log(carro.nome + " " + carro.cor);

let usuarios = [
  { nome: "albertina", cargo: "programador", status: "ativo" },
  { nome: "Bilbonei", cargo: "Engenheiro de software", status: "ativo" },
  { nome: "Codegunde", cargo: "Estagiario", status: "inativo" },
];

console.log(usuarios);

console.log(usuarios[2]);
console.log(usuarios[2].nome);
