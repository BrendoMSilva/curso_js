let carros = ['BMW', 'Fiat', 'VW', 'Audio'];

let removerPrimeiroCarro = carros.shift();

console.log(removerPrimeiroCarro);
console.log(carros);

carros.unshift('Ferrari');

console.log(carros);
console.log(carros[0])

// shift remove a primeira array
// unshift adiciona na primeira array