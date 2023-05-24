const express    = require('express');
const app        = express();
const path       = require('path')
const exphbs     = require('express-handlebars')
const db         = require('./db/connection')
const bodyParsen = require('body-parser')



const PORT = 3000;

app.listen(PORT, function(){
  console.log(`O express está rodando na porta ${PORT}`);
});

// body parser

app.use(bodyParsen.urlencoded({extended: false}));

// handle bars
app.set('views', path.join.join(__dirname, views));
app.engine('handlebars', exphbs({defaultLayout:'main'}))
app.set('view engine', Handlebars)

// db conexão
db
.authenticate()
.then(() => {
  console.log("conectou ao banco de dados com sucesso")
})
.catch(err => {
  console.log("Ocorreu um erro ao conectar" + err)
})


// rotas
app.get('/', (req, res) => {
  res.send('Está funcionando2')
})

// jobs rotas

app.use('/jobs', require('./routes/jobs'))