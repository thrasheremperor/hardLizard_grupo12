const fs = require('fs')

module.exports={
    bd: './data/faqs.json',
    leerJSON: function(){ 
        //Lo que hice aca es traer el json ya leido de una sola vez
        return JSON.parse(fs.readFileSync(this.bd, 'utf-8'));
},
    preguntasYRespuestas: function(){
        return this.leerJSON().faqs;  
    },
   totalDePreguntas: function(){
       return this.leerJSON().total_faqs;
   }
}