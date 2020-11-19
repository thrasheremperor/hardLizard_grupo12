const fs=require('fs')
const { masVotadas } = require('.')
const { leerJson } = require('./homePage')

module.exports={
    bd:'./data/movies.JSON',
    leerJson }

let pelis= this.leerJson().movies

pelis.sort(function(a,b){
    return ((a.title<b.title)?-1:((a.title>b.title)?1:0))})

let votadas=(pelis.filter(function(peli){return peli.vote_average >= 7}));

totalMasVotadas : function(){
    return votadas.length
};

let promedio=0;
			votadas.forEach(function(votada){
			promedio=promedio+votada.vote_average})

promedio:function(){
    return promedio/totalMasVotadas }
