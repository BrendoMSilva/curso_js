class Carro {

    constructor(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
}

let ferrari = new Carro('Ferrari', 'Enzo', '2002-2004', 'Red');

Carro.prototype.marca = 'SMD';
Carro.prototype.aro = 20;


console.log(ferrari.marca);
console.log(Carro.prototype.marca);
console.log(Carro.prototype.aro);
console.log(ferrari);

// sempre que adicionamos uma propriedade a um objeto, é criada uma idêntica no prototype;
// podemos substituir a do prototype;