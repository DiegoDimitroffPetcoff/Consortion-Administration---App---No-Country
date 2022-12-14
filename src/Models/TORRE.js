const mongoose = require('mongoose');

const TorreSchema = new mongoose.Schema({
    Name: {type: String, required: true, max: 100},
    id: {type: Number, required: true, max: 100},
    apartamentos: {type: Array, required: false, max: 100}
});

module.exports= mongoose.model("Torres", TorreSchema)