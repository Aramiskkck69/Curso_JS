'use strict'
//********************** Variables ******************************
var express = require('express');
var ProjectController = require('../controllers/project'); // carga el controlador de las rutas
var router = express.Router();
//******************** Rutas ******************************
router.get('/home', ProjectController.home);
router.get('/test', ProjectController.test);

module.exports = router; //exporta el metodo