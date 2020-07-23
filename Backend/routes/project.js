'use strict'
//********************** Variables ******************************
var express = require('express');
var ProjectController = require('../controllers/project'); // carga el controlador de las rutas
var router = express.Router();
//******************** middleware******************************
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir:'./uploads'});
//******************** Rutas *************************************
router.post('/home', ProjectController.home);
router.post('/test', ProjectController.test);
router.post('/save-project', ProjectController.saveProject);
router.get('/project/:id?', ProjectController.getProject);// ? = opcional
router.get('/projects/', ProjectController.getProjects);//
router.put('/project/:id', ProjectController.updateProject);// put para actualizar datos de la bd
router.delete('/project/:id', ProjectController.deleteProject);//deleted para borrar un  projecto de la bd
router.post('/upload-image/:id',multipartMiddleware,ProjectController.uploadImage);
router.get('/get-image/:image',ProjectController.getImageFile);

//************************************************
module.exports = router; //exporta el metodo