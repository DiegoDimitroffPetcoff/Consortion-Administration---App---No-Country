const mongoose = require('mongoose');


const UsuarioSchema = new mongoose.Schema({
    password: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 100},
    ID_rol: {type: Number, required: true, max: 100}
});

module.exports= mongoose.model(Usuario, UsuarioSchema)