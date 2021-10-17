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

// ===========================

class Pc {

    constructor(marca) {
        this.marca = marca;
    }
}

class Pc2 extends Pc{

    constructor(marca, ano, processador) {
        super(marca, marca);
        this.marca = marca;
        this.ano = ano;
        this.processador = processador;
    }
}

let dell = new Pc2('DELL', 2020, 'I9 9900');

console.log(dell);


//====================================

class Chuteira {

    constructor(marca, tamanho) {
        this.marca = marca;
        this.tamanho = tamanho;
    }
}

class Tenis extends Chuteira {

    constructor(marca, tamanho, cor) {
        super(marca, marca, tamanho, tamanho);
        this.marca = marca;
        this.tamanho = tamanho;
        this.cor = cor;
    }
}

let nike = new Tenis('Nike', 40, 'White');

console.log(nike);



// uma classe pode herdar propriedades de outra classe por herança;
// para isso ultilizamos extends;