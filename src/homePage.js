const fs= require('fs')

module.exports={
    bd: './data/movies.json' ,
<<<<<<< HEAD
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
        })
        return orden.sort();
    }
=======
leerJson:function(){
    return JSON.parse(fs.readFileSync(this.bd,'utf8'))
}
>>>>>>> 5c47b1a1a9db91e2c7cd9744f270a2e6b75b4983
};