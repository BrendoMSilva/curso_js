const express    = require('express');
const exphbs     = require('express-handlebars');
const app        = expreess();
const path       = require('path');
const db         = require('./db/connection');
const bodyParser = require('body-parser');

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`O Express está funcionando na porta ${PORT}`);
});

// body parser
app.use(bodyParser.urlencoded({ extended: false }))

// handlebars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlbars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

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

