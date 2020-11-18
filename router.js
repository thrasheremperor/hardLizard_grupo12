const index= require('./src/index')

module.exports= function(req, res){
    switch(req.url) {
        case '/'://Deriva en el controlador de home
            index.homePage(req,res)
            break;
        case '/en-cartelera'://Deriva en el controlador de cartelera
            index.enCartelera(req,res)
            break
        case '/mas-votadas':
            index.masVotadas(req,res)
            break
        case '/sucursales':
            index.sucursales(req,res)
            break
        case '/contacto':
            index.contactos(req,res)
        case '/preguntas-frecuentes':
            index.preguntasFrecuentes(req,res)
            break
        default:
            break;
    }
}