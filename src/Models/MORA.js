const mongoose = require('mongoose');


const MoraSchema = new mongoose.Schema({
    Fecha_inicio: {type: Number, required: true, max: 100},
    Fecha_fin: {type: String, required: true, max: 100},
    Recargo: {type: Number, required: true, max: 100}

});

module.exports= mongoose.model(Mora, MoraSchema)