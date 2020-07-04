'use strict'
//********************** Variables ******************************

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


};
module.exports = controller;  // exportar modulo del controlador

