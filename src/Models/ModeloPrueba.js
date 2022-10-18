const mongoose = require('mongoose');

const PruebaSchema = new mongoose.Schema({

    objeto:{type: String},
    Autor:{type: String},
    proyecto:{type: String}
});

module.exports= mongoose.model("casa",PruebaSchema)