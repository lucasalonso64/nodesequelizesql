const express = require('express');
const app = express();         
const bodyParser = require('body-parser');
const port = 3009; //porta padrão
const Contatos = require('./models/Contatos')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());   

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);

// Retorna Json
app.get('/api', function(req, res){
    Contatos.findAll().then(function(contatosejs){
      //  console.log(JSON.stringify(contatos))
        res.send(JSON.stringify(contatosejs));
    })
    
})

//inicia o servidor
app.listen(port);
console.log('API funcionando!');