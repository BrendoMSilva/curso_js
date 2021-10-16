class Carro {
    constructor(marca, modelo, aro) {
        this.marca = marca;
        this.modelo = modelo;
        this.aro = aro;
        
    }
    
}

Carro.prototype.cor = 'Red';
Carro.prototype.trasmissao = 'semiautomática';
Carro.prototype.porta = 2;

let ferrari = new Carro('Ferrari', 'Enzo', 20)

console.log(ferrari.cor);
console.log(ferrari.trasmissao);
console.log(ferrari.porta);
console.log(ferrari);
// nao podemos adicionar propriedades na classe, so via prototypes;
// a classe so aceita metodos;