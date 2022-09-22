const mongoose = require('mongoose');
require('dotenv').config()



console.log(configs.MONGO_URI);

mongoose.connect('mongodb+srv://diegodimii:Astronomico1@cluster0.99hplt2.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
} );

const UsuarioSchema = new mongoose.Schema({
    password: {type: String, required: true, max: 100},
    email: {type: String, required: true, max: 100},
    ID_rol: {type: Number, required: true, max: 100}
});

module.exports= mongoose.model(Usuario, UsuarioSchema)