const mongoose = require('mongoose');
require('dotenv').config()



console.log(configs.MONGO_URI);

mongoose.connect('mongodb+srv://diegodimii:Astronomico1@cluster0.99hplt2.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
} );

const Aviso_cobroSchema = new mongoose.Schema({
    Estado: {type: Number, required: true, max: 100},
    Monto: {type: String, required: true, max: 100},
    Fecha: {type: Number, required: true, max: 100},
    Nro_aviso: {type: Number, required: true, max: 100},
    Mora: {type: Number, required: true, max: 100},

});

module.exports= mongoose.model(Aviso_cobroSchema,Aviso_cobroSchemaSchema)