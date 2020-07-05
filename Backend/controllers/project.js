'use strict'
//********************** Variables ******************************
var Project = require('../models/projects');
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
               if(err) return res.status(500).send({message:"Save error"});
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
            if(!projects) res.status(404).send({message:"the docuements dosen't exist"});

            return res.status(200).send({projects: projects});
        });
    },


};
module.exports = controller;  // exportar modulo del controlador

