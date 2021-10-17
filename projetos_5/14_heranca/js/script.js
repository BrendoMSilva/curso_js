class Time {

    constructor(nome) {
        this.nome = nome;
    }
}

class SegundoTime extends Time {

    constructor(nome, corUniforme, patrocinador) {
        super(nome, nome);
        this.nome = nome;
        this.patrocinador = patrocinador;
        this.corUniforme = corUniforme;
    }
    hino() {
        console.log('As the reds go marching on, on, on Just like the Busby Babes in Days gone by...')
    }
}

let united = new SegundoTime('Manchester United', 'Red', 'Adidas');

console.log(united);

united.hino();

// ===========================

class Carro {

    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}

class Moto extends Carro {

    constructor(marca, modelo, cor) {
        super(marca, marca, cor, cor);
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor
    }
}

let bmw = new Moto('BMW', 'I900', 'Black piano');

console.log(bmw);



// uma classe pode herdar propriedades de outra classe por herança;
// para isso ultilizamos extends;