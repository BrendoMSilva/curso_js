function verificarAlgo(num) {
    return new Promise((resolve, reject) => {
        if(num == 2) {
            resolve(console.log('O número é 2'));
        } else {
            reject(new Error('Falhou'));
        }
    })
}

verificarAlgo(5);
verificarAlgo(2);
