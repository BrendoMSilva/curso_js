class Conta {

    constructor(saldoContaCorrente, saldoContaPoupanca, juros) {
        this.saldoContaCorrente = saldoContaCorrente;
        this.saldoContaPoupanca = saldoContaPoupanca;
        this.juros = juros;
    }

    deposito(valor) {
        this.saldoContaCorrente += valor;
    }
    saque(valor) {
        this.saldoContaCorrente -= valor;
    }
    transferenciaPoupanca(valor) {
        this.saldoContaCorrente -= valor;
        this.saldoContaPoupanca += valor;

    }
    transferenciaorrente(valor) {
        this.saldoContaPoupanca -= valor;
        this.saldoContaCorrente += valor;

    }
    jurosAniversario() {
        let juros = (this.saldoContaPoupanca * this.juros) / 100;
        this.saldoContaPoupanca += juros;
    }

}

class ContaEspecial extends Conta {

    constructor(saldoContaCorrente, saldoContaPoupanca, juros) {
        super(saldoContaCorrente, saldoContaPoupanca, juros * 2)
    }
}


let conta = new Conta(5000, 1000, 1);

console.log(conta);

conta.deposito(5000);
console.log(conta);

conta.saque(300);
console.log(conta);

conta.transferenciaPoupanca(3000);
console.log(conta);

conta.jurosAniversario();
console.log(conta)


let conta2 = new ContaEspecial(10000, 50000, 1);

console.log(conta2);

conta2.saque(4000);
console.log(conta2);

conta2.jurosAniversario();
console.log(conta2)




