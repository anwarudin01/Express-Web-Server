const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // res.send('Hello World!');
  // res.json({
  //   nama: 'Anwarudin',
  //   email: 'anwarudin.muhamad@yahoo.co.id',
  //   noHP: '081285815332',
  // });
  res.sendFile('./index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
  // res.send('Ini adalah halaman About');
  res.sendFile('./about.html', { root: __dirname });
});

app.get('/contact', (req, res) => {
  // res.send('Ini adalah halaman Contact');
  res.sendFile('./contact.html', { root: __dirname });
});

app.get('/product/:id', (req, res) => {
  res.send(`Product ID : ${req.params.id} <br> Category : ${req.query.category}`);
});

app.use('/', (req, res) => {
  res.status(404);
  res.send('<h1>404</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
