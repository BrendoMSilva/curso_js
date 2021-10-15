// Cachorro ------------------
function criarCachorro(raca) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    return cachorro;
}

let doberman = criarCachorro('Doberman');

console.log(doberman.raca);

// Carro -----------------

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

console.log(ferrari);
ferrari.som();

// construtores sao formas de instanciar uma classe em uma linguagem de programação;
// instanciar = criar um objeto novo;
// No contrutor ja podemos definir propriedades;