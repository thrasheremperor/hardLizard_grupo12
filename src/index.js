const homePage = require("./homePage");
const enCartelera = require("./enCartelera");
const masVotados = require("./masVotados");
const sucursales = require("./sucursales");
const contactos = require("./contactos");
const preguntasFrecuentes = require("./preguntasFrecuentes");


module.exports = {
    homePage:function(req,res){
        res.write(``);

        res.end();
    },
   
    enCartelera:function(req,res){
        res.write(``);

        res.end();
    },
    
    masVotadas:function(req,res){
        res.write(``);

        res.end();
    },
    
    sucursales:function(req,res){
        res.write(``);

        res.end();
    },
    
    contactos:function(req,res){
        res.write(``);

        res.end();
    },
    
    preguntasFrecuentes:function(req,res){
        res.write(``);

        res.end();
    }
}