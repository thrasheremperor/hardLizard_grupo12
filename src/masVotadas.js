const fs = require("fs");

module.exports = {
    bd: "./data/movies.json",
    leerJSON: function(){
        return JSON.parse(fs.readFileSync(this.bd,"utf-8"));
    },
    peliTitulos:function(){
        let voteFilter=this.leerJSON().movies.filter(peli=>peli.vote_average>=7);
        return voteFilter.sort(function(a,b){
            return((a.vote_average>b.vote_average)?-1:((a.vote_average<b.vote_average)?1:0));
        });
    },
    totalPelis:function(){
        let archivo=this.leerJSON().movies.filter(peli=>peli.vote_average>=7);
        return archivo.length;
    },
    peliPromedio:function(){
        let voteFilter=this.leerJSON().movies.filter(peli=>peli.vote_average>=7);
        let masVotes=voteFilter.map(peli=>peli.vote_average);
        let puntajeVotes=masVotes.reduce((number,acum)=>acum+number);
        return (puntajeVotes/masVotes.length).toFixed(2);
    },
};


