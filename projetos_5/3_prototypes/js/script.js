let pessoa = {
    maos: 2,
    name: 'Brendo'
}

console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) == Object.prototype);
console.log(pessoa.hasOwnProperty('maos'))
console.log(pessoa.toString('name'));

// Objeto fallback de outro objeto;
// quando um objeto recebe uma requisicao de uma propriedade que nao tem, ela é procurada no prototypes deste objeto;
// o prototype de um objeto criado do zero é object, que tem os metodos nativos da linguagem; 