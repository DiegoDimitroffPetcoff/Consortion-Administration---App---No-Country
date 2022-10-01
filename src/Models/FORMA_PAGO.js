const mongoose = require('mongoose');


const Forma_pagoSchema = new mongoose.Schema({
    Name: {type: String, required: true, max: 100},
});

module.exports= mongoose.model(Forma_pago, Forma_pagoSchema)