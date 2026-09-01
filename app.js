const express = require('express');

const app = express();

const PORT = 3000;


//configurar ejs
app.set('view engine', 'ejs');

//RUTAS
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/servicios', (req, res) => {
    res.render('servicios');
});

app.get('/nosotros', (req, res) => {
    res.render('nosotros');
});

app.get('/contactos', (req, res) => {
    res.render('contactos');
});

app.listen(PORT, () =>{
    console.log('Servidor corriendo em http://localhost:&(PORT)');
});





















//inp init -y
//Prender server es con node app.js
//npm run dev <= modo de desarrollo 
//$ npm install ejs <= italador de ejs