const express = require('express');
const obtenerUsuariosPorEspecialidad = require('./usuarios.js');

const app = express();

app.get('/', (req, res) => {
  console.log(req.path);
  res.send(
    `<h1>Soy la pagina principal</h1> <a href="/marketing">Marketing   </a><a href="/developers">Developers</a> </a><a href="/qas">QAs</a> </a><a href="/ventas">Ventas</a>`
  );
});

app.get('/marketing', (req, res) => {
    const arr=obtenerUsuariosPorEspecialidad('marketing')
    console.log(arr)
  res.send(
    `<h1>Marketing</h1> <a href="/">HOME</a>`
  );
});

app.get('/developers', (req, res) => {
  res.send(
    `<h1>Developers</h1> <a href="/">HOME</a>`
  );
});

app.get('/qas', (req, res) => {
    res.send(
      `<h1>QAs</h1> <a href="/">HOME</a>`
    );
  });

  app.get('/ventas', (req, res) => {
    res.send(
      `<h1>Ventas</h1> <a href="/">HOME</a>`
    );
  });

  app.use((req, res)=>{
    res.status(404).send('<h1>Pagina no encontrada</h1> <a href="/">HOME</a>')
  })

app.listen(3000, (req, res) => {
  console.log('Server listening...');
});
