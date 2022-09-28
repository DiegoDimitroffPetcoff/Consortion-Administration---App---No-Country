const mongoose = require('mongoose');


const NoticiaSchema = new mongoose.Schema({
    Titulo: {type: String, required: true, max: 100},
    Descripcion: {type: String, required: true, max: 100},
    Fecha: {type: String, required: true, max: 100}

});

module.exports= mongoose.model(Noticia, NoticiaSchema)