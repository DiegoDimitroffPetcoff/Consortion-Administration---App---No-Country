const mongoose = require('mongoose');


const CuotaSchema = new mongoose.Schema({
    Porcentaje_Mora: {type: Number, required: true, max: 100},
    Dia_pago_limite: {type: String, required: true, max: 100},
    Torre: {type: String, required: true, max: 100},
});

module.exports= mongoose.model(Cuota, CuotaSchema)