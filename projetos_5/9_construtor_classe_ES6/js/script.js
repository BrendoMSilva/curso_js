class Cachorro {
    constructor(raca, patas, cor, nome) {
        this.raca = raca;
        this.patas = patas;
        this.cor = cor;
        this.nome = nome;
    }
}

let pitbull = new Cachorro('Pitbull', 4, 'Caramelo', 'Zeus');

console.log(pitbull);
console.log(pitbull.raca);
console.log(pitbull.nome);

// com a versao do ES6, uma possibilidade de criar uma classe (objeto) com construtor foi adicionada;
// entao nao precisamos mais criar por meio de uma funcao;