const fs = require("fs");
module.exports = {
    bd: "./data/theaters.json",
    leerJSON: function(){
        return JSON.parse(fs.readFileSync(this.bd,"utf-8"));
    },

    cines: function(){
        return this.leerJSON().theaters;
    },

    nCines: function(){
        return this.leerJSON().total_theaters;
    }
    
}