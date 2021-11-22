const express    = require('express');
const app        = express();
const db         = require('./db/connection');
const bodyParser = require('body-parser');

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`O Express está funcionando na porta ${PORT}`);
});

// body parser
app.use(bodyParser.urlencoded({ extended: false }))

// db connectiopn
db
    .authenticate()
    .then(() => {
        console.log('conectou ao banco com sucesso');
    })
    .catch(err => {
        console.log('ocorreu um erro ao conectar', err);
    });

// routes
app.get('/', (req, res) => {
    res.send('Esta funcionando 3');
});

// jobs routes
app.use('/jobs', require('./routes/jobs'));

