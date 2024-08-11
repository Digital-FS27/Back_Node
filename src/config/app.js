const express = require('express');
const productsRouter = require('../routes/productsRouter.js')
const app = express();

app.use(express.json(), productsRouter);

app.get('/', (req, res) => {
    res.send('Olá world!');
});
  
module.exports = { app }