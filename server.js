// server.js
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola Mundo!');
});

app.listen(3000, () => {
  console.log('El servidor está corriendo en http://localhost:3000');
});