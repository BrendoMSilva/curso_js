function carteiraDeMotorista(idade) {

    if(idade >= 18) {
        console.log(`Você tem ${idade} anos é pode se increver na auto escola.`);
    } else {
        console.log(`Você tem ${idade} anos é ainda não podera se inscrever na auto escola.`);
    }
}

carteiraDeMotorista(20);
carteiraDeMotorista(18);
carteiraDeMotorista(16);
