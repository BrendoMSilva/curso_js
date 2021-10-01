let pessoa = {
    nome: 'Brendo',
    idade: 20,
    profissao: 'Programador'
}

console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);

console.log(pessoa);

pessoa.casado = false;

console.log(pessoa.casado);

console.log(pessoa);

let carro = {
    marca: 'Ford',
    modelo: 'Fusion',
    ano: 2018
}

console.log(carro);

carro.motor ='2.0';
carro.rodas = 4;
carro.airBag = 'incluido';
carro.transmissao = '6F35'
carro.cor = 'preto';
console.log(carro);

delete carro.roda;
console.log(carro.roda);

// deletando e adicionando objetos.