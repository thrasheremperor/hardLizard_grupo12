const homePage = require("./homePage");
const enCartelera = require("./enCartelera");
const masVotados = require("./masVotadas");
const sucursales = require("./sucursales");
const contactos = require("./contacto");
const preguntasFrecuentes = require("./preguntasFrecuentes");


module.exports = {
    homePage:function(req,res){
        res.write(``);

        res.end();
    },
   
    enCartelera:function(req,res){
        res.write(`////////EN CARTELERA\n\n////////TOTAL DE PELICULAS: ${enCartelera.nPeliculas()}`);
        enCartelera.peliculas().forEach(pelicula => {
            res.write(`\n\n${pelicula.title.toUpperCase()}\n\nDescripcion:\n${pelicula.overview}\n\n-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n`)
        })

        res.end();
    },
    
    masVotadas:function(req,res){
        res.write(``);

        res.end();
    },
    
    sucursales:function(req,res){
        res.write(`////////NUESTRAS SALAS\n\n////////TOTAL DE SALAS: ${sucursales.nCines()}\n\n`);
        sucursales.cines().forEach(cine => {
            res.write(`Nombre: ${cine.name}\n\nDirección: ${cine.address}\n\nDescripcion: ${cine.description}\n\n-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n\n`)
        });

        res.end();
    },
    
    contactos:function(req,res){
        res.write(`////////CONTACTENOS\n\n${contactos}`);

        res.end();
    },
    preguntasFrecuentes: function (req, res){
            res.write('>>>>>Preguntas Frecuentes<<<<< \n \n ');
			res.write(`Total de preguntas: ${preguntasFrecuentes.totalDePreguntas()}\n \n`);
			res.write('------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------')
			
			preguntasFrecuentes.preguntasYRespuestas().forEach(pyc => {
                res.write(`\n\n${pyc.faq_title}\n\n${pyc.faq_answer}\n\n-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\n`)
            })

        res.end();
    }
}