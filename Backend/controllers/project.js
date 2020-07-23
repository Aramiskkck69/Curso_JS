'use strict'
//********************** Variables ******************************
var Project = require('../models/projects');
var fs = require('fs');
var path = require ('path');

//******************************
var controller = {

    home: function(req,res){
        return res.status(200).send({
            message: 'Soy el inicio'
        });
    },
    //************** Test **************
    test: function(req,res){
        return res.status(200).send({
            message: 'Soy el test del controller'
        });
    },
    //************** saveProject (Guardar Proyectos)**************
    saveProject: function(req,res){

        var project = new Project();
        var params = req.body;

            project._id = params._id;
            project.name = params.name;
            project.description = params.description;
            project.category = params.category;
            project.year = params.year;
            project.langs = params.langs;
            project.image = null;

            project.save((err, projectStored) => {
               if(err) return res.status(500).send({message:"Error al Guardar"});
               if(!projectStored) res.status(404).send({message:"The project has not been saved"});
                return res.status(200).send({project: projectStored});
            });
    },
    //************** getProject (listar proyectos)**************
    getProject: function (req,res) {

        var projectId = req.params.id; // obtiene parametros de la url

        if (projectId == null) res.status(404).send({message:"the docuement dosen't exist"});

        Project.findById(projectId, (err,project) => {//Buscar por id
            if(err) return res.status(500).send({message:"Wrong id"});
            if(!project) res.status(404).send({message:"the docuement dosen't exist"});

            return res.status(200).send({project: project});
        });
    },
    //************** getProjects (listar todos los proyectos)**************
    getProjects: function (req,res) {

        Project.find({}).sort('-year').exec((err, projects) => { //sort sirve para ordenar el array de objetos y find
            if(err) return res.status(500).send({message:"Wrong collection"});// metodo para hacer la consulta a la bd
            if(!projects) return res.status(404).send({message:"the docuements dosen't exist"});

            return res.status(200).send({projects: projects});
        });
    },
    //************** updateProject (actualizar un proyecto)**************
    updateProject: function (req,res) {
        var projectID = req.params.id;
        var update = req.body;

        Project.findByIdAndUpdate(projectID, update,{new:true}, (err, projectUpdated) =>{

            if(err) return res.status(500).send({message:"Wrong collection"});// metodo para hacer la consulta a la bd

            if(!projectUpdated) return res.status(404).send({message:"the docuements dosen't exist"});

            return res.status(200).send({project: projectUpdated});

        });
    },
    //************** deleteProject (borrar un proyecto)**************
    deleteProject: function (req,res) {
        var projectID = req.params.id;

       Project.findByIdAndRemove(projectID, (err, projectdeleted) =>{

           if(err) return res.status(500).send({message:"The project couldn't been found"});// metodo para hacer la consulta a la bd

           if(!projectdeleted) return res.status(404).send({message:"Project not deleted"});

           return res.status(200).send({project: projectdeleted});
       });
    },
    //************** Subir Imagen ****************************
    uploadImage: function (req,res) {
        var projectID= req.params.id;
        var fileName = "Imagen no subida..";

        console.log(projectID);

        if (req.files){
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName =  fileSplit[1];
            var extSplit =  fileName.split('\.');
            var fileExt =   extSplit[1];

            if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif') {

                Project.findByIdAndUpdate(projectID, {image: fileName}, {new: true}, (err, projectUpdated) => {
                    if(err) return res.status(500).send({message: " Error al subir la imagen"});
                    if(!projectUpdated) return res.status(200).send({message: "No se ha subido nada"});

                    return res.status(200).send({project: projectUpdated});
                });
            } else {
                fs.unlink(filePath, (err) => { //
                    return res.status(200).send(`La extension no es valida, solo puede enviar imagenes con 
                                                           extension <strong> JPG,PNG,JPEG y GIF </strong> usted subio 
                                                           un documento cons extension: <strong>${fileExt}</strong>`);
                });
            }
        }else{
            return res.status(200).send({message: fileName});

        }
    },
    getImageFile(req,res){
        var file = req.params.image;
        var path_file = './uploads/'+file;
        fs.exists(path_file, (exist) => {
            if (exist){
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(200).send({
                    message: "No existe la imagen..."});
            }
        });
    }


};
module.exports = controller;  // exportar modulo del controlador

