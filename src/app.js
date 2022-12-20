const express = require('express');

const app = express();
app.use(express.json());

const database = require('./db');
const Previsao = require('./models/previsao');

app.get('/load', async (req, res) => {
  
  const previsoes = [{
    cidade: 'Rio Largo',
    temperatura: 29,
    temperaturaMaxima: 40,
    temperaturaMinima: 26,
    descricao: 'Sol',
    data: '2022-12-19'
  },
  {
    cidade: 'Rio Largo',
    temperatura: 27,
    temperaturaMaxima: 40,
    temperaturaMinima: 26,
    descricao: 'Sol',
    data: '2022-12-20'
  },
  {
    cidade: 'Rio Largo',
    temperatura: 28,
    temperaturaMaxima: 33,
    temperaturaMinima: 26,
    descricao: 'Sol com nuvens',
    data: '2022-12-21'
  },
  {
    cidade: 'Rio Largo',
    temperatura: 68,
    temperaturaMaxima: 37,
    temperaturaMinima: 26,
    descricao: 'Sol com nuvens',
    data: '2022-12-22'
  },

  {
    cidade: 'Rio Largo',
    temperatura: 68,
    temperaturaMaxima: 37,
    temperaturaMinima: 26,
    descricao: 'Chuva',
    data: '2022-12-22'
  }
];
  

  previsoes.forEach(async previsao => {
    await Previsao.create(previsao)
  });

  res.send({message: 'Inserido com sucesso!'});
});


app.get('/riolargo', async (req, res) => {
  const result = await Previsao.findAll();

  res.send(result);
})

app.listen(9000, async () => {
  const resultDb = await database.sync();
  
  console.log('server running');
});