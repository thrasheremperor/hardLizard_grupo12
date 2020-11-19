const fs= require('fs')

module.exports = {
    bd: './data/movies.json' ,
    leerJson: function(){
        return JSON.parse(fs.readFileSync(this.bd,'utf-8'))
    },
    
    nPelis: function(){
        return this.leerJson().total_movies;
    },

    pelis: function(){
        return this.leerJson().movies;
    },
    
    pelisOrden: function(){
        let orden = [];
        this.leerJson().movies.forEach((peli) =>{
            orden.push(peli.title);
        });
       
         return orden.sort();
    }
};