const mongoose = require('mongoose');
require('dotenv').config()



console.log(configs.MONGO_URI);

mongoose.connect('mongodb+srv://diegodimii:Astronomico1@cluster0.99hplt2.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
} );

const NoticiaSchema = new mongoose.Schema({
    Titulo: {type: String, required: true, max: 100},
    Descripcion: {type: String, required: true, max: 100},
    Fecha: {type: String, required: true, max: 100}

});

module.exports= mongoose.model(Noticia, NoticiaSchema)