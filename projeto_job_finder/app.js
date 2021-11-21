const express = require('express');
const app = express();
const db = require('./db/connection')

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`O Express está funcionando na porta ${PORT}`);
});

// db connectiopn
db
    .authenticate()
    .then(() => {
        console.log('conectou ao banco com sucesso');
    })
    .catch(err => {
        console.log('ocorreu um erro ao conectar', err);
    });

app.get('/', (req, res) => {
    res.send('Esta funcionando 5');
});
