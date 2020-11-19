let fs = require("fs");

module.exports = {
    bd: "./data/movies.json",
    
    leerJSON: function(){
        return JSON.parse(fs.readFileSync(this.bd, "utf-8"));
    },


    masVotadas: function(){
        let votadas = [];
        this.leerJSON().movies.filter((movie) => {
            if(movie.vote_average >= 7){
                votadas.push(movie);
            }
        })
        return votadas;
    },

    promedio: function(){
        let pelis = this.leerJSON().movies.filter((movie)=>{
            if(movie.vote_average>=7){
                return movie;
            }
        });
        let votos = [];
        pelis.forEach(element => {
            votos.push(element.vote_average)
        });
        cantidad = votos.length;
        let suma = votos.reduce((acu, numero) =>{
            return acu + numero
        })
        return suma/cantidad;
    }
}