const mongoose = require('mongoose');


const Banco_condominioSchema = new mongoose.Schema({
    Nro_Cuenta: {type: Number, required: true, max: 100},
    Name: {type: String, required: true, max: 100},
    Cedula: {type: Number, required: true, max: 100},
    Fecha_pago: {type: Number, required: true, max: 100},
    Nro_confirmacion: {type: Number, required: true, max: 100},
    Fecha_confirmacion: {type: Number, required: true, max: 100},
    Imagen: {type: String, required: true, max: 100},
    Monto: {type: String, required: true, max: 100}
});

module.exports= mongoose.model(Banco_condominio,Banco_condominioSchema)