const mongoose = require('mongoose');


const PropietarioSchema = new mongoose.Schema({
    Cedula: {type: String, required: true, max: 100},
    ID_Usuario: {type: Number, required: true, max: 100}
});

module.exports= mongoose.model(Propietario, PropietarioSchema)