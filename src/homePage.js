const fs= require('fs')

module.exports={
    bd: './data/movies.json' ,
leerJson:function(){
    return JSON.parse(fs.readFileSync(this.bd,'utf8'))
}
};