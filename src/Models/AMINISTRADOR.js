const mongoose = require('mongoose');

const AdministradorSchema = new mongoose.Schema({
    Cedula: {type: String, required: true, max: 100},
    ID_usuario: {type: Number, required: true, max: 100}
});

module.exports= mongoose.model("Administrador",AdministradorSchema)