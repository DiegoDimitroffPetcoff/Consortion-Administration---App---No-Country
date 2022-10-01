const mongoose = require('mongoose');


const Aviso_cobroSchema = new mongoose.Schema({
    Estado: {type: Number, required: true, max: 100},
    Monto: {type: String, required: true, max: 100},
    Fecha: {type: Number, required: true, max: 100},
    Nro_aviso: {type: Number, required: true, max: 100},
    Mora: {type: Number, required: true, max: 100},

});

module.exports= mongoose.model(Aviso_cobroSchema,Aviso_cobroSchemaSchema)