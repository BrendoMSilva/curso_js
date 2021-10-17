class Banco {
    constructor(saldo, saque, deposito) {
        this.saldo = saldo;
        this.saque = saque;
        this.deposito = deposito;
    }
}

let banco = new Banco('R$ 200,00', 'R$ 200,00', 'R$ 150,00');

console.log(banco);
console.log(banco.saldo);
console.log(banco.saque);
console.log(banco.deposito);