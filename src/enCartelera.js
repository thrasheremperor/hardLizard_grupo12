const fs = require("fs");
module.exports = {
    bd: "./data/movies.json",
    leerJSON: function(){
        return JSON.parse(fs.readFileSync(this.bd,"utf-8"));
    },

    peliculas:function(){
        return this.leerJSON().movies;
    },

    nPeliculas:function(){
        return this.leerJSON().total_movies;
    }
}