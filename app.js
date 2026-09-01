//inp init -y
//Prender server es con node app.js
//npm run dev <= modo de desarrollo 
//

//PASO 1
const express = require('express');
const path = require('path');

//PASO 2
const app = express();

//PASO 3 - Crear puerto de conexion servidor
const PORT = 3000;

//PASO 4 - Levatar motor de plantilla
app.set('view engine', 'ejs');

//PASO 5 - Archivos estaticos
app.use(express.static(path.join(__dirname,'public')));

//RUTAS
//Index(Home)
app.get('/', (req, res) => {
    res.render('index');
});

//Servicios
app.get('/servicios', (req, res) => {
    res.render('servicios');
});


//levantar servido
app.listen(PORT, () => {
    console.log("Servidor Arriba");
});