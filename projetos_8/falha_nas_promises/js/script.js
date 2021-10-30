let erroPromise = Promise.resolve(new Error('Algo deu errado'));

erroPromise
    .then((value) => console.log(value))
    .catch(reason => console.log('Erro: ' + reason));