let pessoa = {
    nome:'Brendo'
}

let pessoa2 = pessoa;

let pessoa3 = {
    nome:'Brendo'
}

console.log(pessoa == pessoa2); // True
console.log(pessoa3 == pessoa); // False
console.log(pessoa3 == pessoa2); // False

pessoa2.nome = 'Pedro';

console.log(pessoa.nome);

pessoa.nome = 'Maria';

console.log(pessoa2.nome);


// um objeto pode herdar todas as caracteristicas do outro, virando uma referencia ao mesmo