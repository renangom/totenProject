const express = require('express');
const pergunta1 = require('./perguntas');
const cors = require('cors');


const servidor = express();
servidor.use(express.json());
servidor.use(cors());

const porta = 3000;

servidor.get('/bom-dia', (req, res) => {
    res.send("Bom dia");
});


servidor.get('/boa-tarde', (req,res) => {
    res.send('Boa tarde');
}); 

servidor.get('/perguntas', (req,res) => {
    res.send(pergunta1);
})

servidor.listen(porta, () => {
    console.log("Conectado na porta 3000");
})









