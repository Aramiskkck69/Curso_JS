'use strict'
//********************** Cargar librerias y Variables  ******************************
var mongoose = require('mongoose');
var Schema = mongoose.Schema; // Objeto esquema
//*****************************************************************
var ProjectSchema = Schema({//Objeto Molde
    id:String,
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image:String
});

module.exports = mongoose.model('Project',ProjectSchema); // Creacion del modulo
