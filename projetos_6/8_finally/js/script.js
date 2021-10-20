// resolve o problema: let a = 2;

try {
    let a = c + b;
} catch(error) {    
    console.log('Algo deu errado: ' + error);
} finally {
    console.log('executou');
}

// Finally é executada independente do resultado do try/catch;
// E pode existir com try e catch ou apenas try;
// não é muito usado;