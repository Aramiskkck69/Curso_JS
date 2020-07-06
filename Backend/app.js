'use strict'
//********************** Cargar librerias ******************************
var express = require('express');
var bodyParser = require('body-parser');
//**********************************************************************
var app = express();


//********************* Cargar Archivos de rutas *************************
var project_routes = require('./routes/project'); // importa las rutas del archivo routes/project

// ************************* Middleware *************************
app.use(bodyParser.urlencoded({extended:false}));// leer el codigo
app.use (bodyParser.json()); // convertir cual quier cosa por el body se convierte en json

// ************************* CORS *****************************
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');// cambiar el * por la url clase 230.- Configurar cabeceras
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})
// ************************* Rutas ***************************

app.use('/api',project_routes); // cargar rutas del controlador
//************************* Exportar *************************
module.exports = app; // Crear app en un modulo