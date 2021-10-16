// Cachorro ======================
function criarCachorro(raca) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    return cachorro;
}

let doberman = criarCachorro('Doberman');

console.log(doberman.raca);

// Carro ======================

function criarCarro(marca, rodas, cor, modelo) {
    let carro = Object.create({});
    carro.marca = marca;
    carro.rodas = rodas;
    carro.cor = cor;
    carro.modelo = modelo;
    carro.som = function() {
        console.log('vruuuuuuuum')
    }
    return carro
}

let ferrari = criarCarro('Ferrari', 4, 'Red', 'Enzo');

console.log(ferrari.marca);
console.log(ferrari);
ferrari.som();

// Roupa ===================

function roupaNike(marca, estilo, tamanho) {
    let roupa = Object.create({});
    roupa.marca = marca;
    roupa.estilo = estilo;
    roupa.tamanho = tamanho;

    return roupa
}

let roupaNikeNova = roupaNike('NIKE', 'Trapp e HIP HOP', 'XG GG M P PP');

console.log(roupaNikeNova.marca)
console.log(roupaNikeNova);

// video game ===================

function videoGame(marca, nome, design) {
    let game = Object.create({});
    game.marca = marca;
    game.nome = nome;
    game.design = design;
    
    return game
}

let sony = videoGame('SONY', 'Playstation 5', 'Future');

console.log(sony.marca);
console.log(sony);


// construtores sao formas de instanciar uma classe em uma linguagem de programação;
// instanciar = criar um objeto novo;
// No contrutor ja podemos definir propriedades;