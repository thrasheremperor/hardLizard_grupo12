const fs= require('fs')

module.exports={
    baseDatos: './data/movies.json' ,
leerJson:function(){
    return JSON.parse(fs.readFileSync(this.baseDatos,'utf8'))
}
};