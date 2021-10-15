let pessoa = {
    pernas: 2
}

let pessoaNova = Object.create(pessoa);

console.log(pessoaNova.pernas);
console.log(Object.getPrototypeOf(pessoaNova) == pessoa);

// quando criamos um objeto a partir de um outro, o base sera o prototype;
// ele herdará tanto os metodos e propriedades de Object (o prototype do objeto base para este novo);