require('dotenv').config();

const express = require('express');

const app = express();

const PORT = process.env.PORT;
const path = require('path');

//configurar ejs
app.set('view engine', 'ejs');

//MIDOLEWARES   
//Permite leer informacion enviada
//desde el formulario HTML
app.use(express.urlencoded({extended: true }));

//configurar estaticos
app.use(express.static(path.join(__dirname, 'public')));

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

app.get('/contacto', (req, res) => {
    res.render('contacto');
});

app.post('/contacto',(req, res) =>{
    const {
        nombre, 
        correo, 
        asunto, 
        mensaje
    } = req.body;

    console.log("--------------------------------------");
    console.log("NUEVO MENSAJE");
    console.log("--------------------------------------");

    console.log("nombre", nombre);
    console.log("correo", correo);
    console.log("asunto", asunto);
    console.log("mensaje", mensaje);
});


app.listen(PORT, () =>{
    console.log('Servidor corriendo em http://localhost:&(PORT)');
});


//inp init -y
//Prender server es con node app.js
//npm run dev <= modo de desarrollo 
//$ npm install ejs <= italador de ejs
//istalar npm i dotenev