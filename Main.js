var mongoose = require('mongoose');
var blogSchema = require('./Schema');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/blog',{useNewUrlParser:true});

var Blog = mongoose.model('Blog',blogSchema,"blog");

//Metodo para Agregar 

var registro = new Blog({
    title:'monografia',
    author:'miguel angel',
    body:'tareas para resolver',
    comments:[{body:'Regular', date:'1/03/2010'}],
    meta: {votes:3, favs:4}
})


//Metodo para Guardar

registro.save((error) => {
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Registro guardado");
    process.exit(0);
})


