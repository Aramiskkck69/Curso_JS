'use strict'

//************************ Variables *****************************
var mongose = require('mongoose'); //cargar libreria de moongose
var app = require ('./app'); //cargar el app.js donde esta toda la parte de lectura de las peticiones
var port = 3700; // numero del server //localhost:/3700

//**********************************************************************
mongose.Promise = global.Promise; //hacer una promesa
mongose.connect('mongodb://localhost:27017/portafolio') //pasar url de la base de datos
        .then(()=>{
            console.log("******************************************************************");//
            console.log('Conexion a la base Realizada con Exito!! ') //mensaje en la consola
            // Creacion del Server
            app.listen(port,() => {
                console.log("Servidor correcto /localhost:3700/ ")//si la conexion se ha realizado conectamente o no
            })

        })
        .catch(err => console.log(err)); // Mensaje de error

