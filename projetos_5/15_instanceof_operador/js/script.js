class Carro {

    constructor(marca) {
        this.marca = marca;
    }
}

class Moto extends Carro {

    constructor(marca, ano) {
        super(marca, marca)
        this.ano = ano;
    }
}

console.log(new Moto instanceof Carro);
console.log(new Carro instanceof Moto);

// podemos verificar quem é o pai do objeto ultilizando o instanceof