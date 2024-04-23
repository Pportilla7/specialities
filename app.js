const express = require('express');
const obtenerUsuariosPorEspecialidad = require('./usuarios.js');
const _ = require('lodash');

const app = express();

app.get('/', (req, res) => {
  res.send(
    `<h1>Soy la pagina principal</h1> <a href="/marketing">Marketing   </a><a href="/developers">Developers</a> </a><a href="/qas">QAs</a> </a><a href="/ventas">Ventas</a>`
  );
});

app.get('/marketing', (req, res) => {
  imprimirUser(res, 'marketing');
});

app.get('/developers', (req, res) => {
  imprimirUser(res, 'developers');
});

app.get('/qas', (req, res) => {
  imprimirUser(res, 'QAs');
  });

  app.get('/ventas', (req, res) => {
    imprimirUser(res, 'ventas');
  });

  app.use((req, res)=>{
    res.status(404).send('<h1>Pagina no encontrada</h1> <a href="/">HOME</a>')
  })

app.listen(3000, (req, res) => {
  console.log('Server listening...');
});


function imprimirUser(res, especialidad){
  const Especialidad=_.capitalize(especialidad)
  
  const objUsers=obtenerUsuariosPorEspecialidad(especialidad)
  
  let arrInfoUser=[]

  objUsers.forEach(usuario => {
    // Accede a las propiedades id, name y age de cada objeto de usuario
    const id = usuario.id;
    const name = usuario.name;
    const age = usuario.age;
  
    arrInfoUser.push(`ID: ${id} Nombre: ${name} Edad: ${age}   `)
  });

  res.send(
    `<h1>${Especialidad}</h1>
    <p>${arrInfoUser}<p>
    <a href="/">HOME</a>`
  );
}