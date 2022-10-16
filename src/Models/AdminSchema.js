const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
      nombre: {
        type: String,
        required: true
      },
      apellidos: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      password:{
        type: String,
        required:true
      },
      confirmarPassword:{
        type: String,
        required:true
      }
      
});


module.exports= mongoose.model('administrador', AdminSchema)