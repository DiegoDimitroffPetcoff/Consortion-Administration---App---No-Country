const mongoose = require('mongoose');


const PagoSchema = new mongoose.Schema({
    Forma_pago: {type: String, required: true, max: 100},
    Aviso_cobro: {type: String, required: true, max: 100}
});

module.exports= mongoose.model(Pago, PagoSchema)