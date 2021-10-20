class Carro {
    constructor(marca, cor, gasolinaRestante, consumo) {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumo = consumo;
    }

    dirigir(km) {

        let litroConsumidos = km / this.consumo;
        this.gasolinaRestante -= litroConsumidos;
    }

    abastecer(litro) {
        this.gasolinaRestante += litro;
    }

}


let carro = new Carro('Ferrari', 'Red', 100, 5);

console.log(carro);

carro.dirigir(100);
console.log(carro);

carro.abastecer(10);
console.log(carro);



