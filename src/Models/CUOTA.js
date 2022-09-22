const mongoose = require('mongoose');
require('dotenv').config()



console.log(configs.MONGO_URI);

mongoose.connect('mongodb+srv://diegodimii:Astronomico1@cluster0.99hplt2.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
} );

const CuotaSchema = new mongoose.Schema({
    Porcentaje_Mora: {type: Number, required: true, max: 100},
    Dia_pago_limite: {type: String, required: true, max: 100},
    Torre: {type: String, required: true, max: 100},
});

module.exports= mongoose.model(Cuota, CuotaSchema)