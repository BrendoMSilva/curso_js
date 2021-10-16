function Cachorro(raca, patas, pelos, olhos) {
    this.raca = raca;
    this.patas = patas;
    this.pelos = pelos;
    this.olhos = olhos;
    this.nome = function() {
        console.log(' O nome do cachorro é BOB');
    }
}

let husky = new Cachorro('HUSKY', 4, 'Branco', 'Azul');

console.log(husky);
console.log(husky.raca);
husky.nome();

// em muitas linguagens temos a possibilidade de instanciar um objeto com new, no JS tambem;