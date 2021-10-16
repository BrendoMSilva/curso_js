class Carro {

    constructor(marca, modelo, transmissao) {
        this.marca = marca;
        this.modelo = modelo;
        this.transmissao = transmissao;
    }
}

let cor = Symbol();

Carro.prototype[cor] = 'Red';

let ferrari = new Carro('Ferrari', 'Enzo', 'semiautomático');

console.log(ferrari);

// acessando symbol
console.log(Carro.prototype[cor]);
console.log(ferrari[cor]);


class Carro2 {

    constructor(marca, modelo, transmissao) {
        this.marca = marca;
        this.modelo = modelo;
        this.transmissao = transmissao;
    }
}

let aro = Symbol();
    Carro2.prototype[aro] = 20;

let motor = Symbol();
    Carro2.prototype[motor] = '6,5 l V12'

let lamborghini = new Carro2('lamborghini', 'Aventador', 'semiautomática');

console.log(lamborghini);
console.log(Carro2.prototype[aro]);
console.log(lamborghini[motor]);


// propriedades únicas, que não podem ser alteradas e nem criadas duas vezes;
// podemos utilizar como uma constante, só que para propriedades de objeto;