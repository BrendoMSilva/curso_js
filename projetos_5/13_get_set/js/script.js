class Carro {

    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    get getCor() {
        return this.cor;
    }
    set setCor(cor) {
        this.cor = cor;
    }
}

let ferrari = new Carro('Ferrari', 'Enzo');

console.log(ferrari);

// set
ferrari.setCor = 'Red';

// get
console.log(ferrari.getCor);




// Get: serve para resgatar o valor de uma propriedadde;
// Set: serve para alterar o valor de uma propriedade; 