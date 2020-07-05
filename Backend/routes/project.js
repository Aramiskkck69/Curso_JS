'use strict'
//********************** Variables ******************************
var express = require('express');
var ProjectController = require('../controllers/project'); // carga el controlador de las rutas
var router = express.Router();
//******************** Rutas ******************************
router.post('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
router.get('/project/:id?', ProjectController.getProject);// ? = opcional
router.post('/projects/', ProjectController.getProjects);// ? = opcional

module.exports = router; //exporta el metodo