const mongoose = require('mongoose');
require('dotenv').config()



console.log(configs.MONGO_URI);

mongoose.connect('mongodb+srv://diegodimii:Astronomico1@cluster0.99hplt2.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
} );

const MoraSchema = new mongoose.Schema({
    Fecha_inicio: {type: Number, required: true, max: 100},
    Fecha_fin: {type: String, required: true, max: 100},
    Recargo: {type: Number, required: true, max: 100}

});

module.exports= mongoose.model(Mora, MoraSchema)