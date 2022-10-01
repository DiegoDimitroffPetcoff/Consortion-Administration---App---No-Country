const mongoose = require('mongoose');


const PersonaSchema = new mongoose.Schema({
    Name: {type: String, required: true, max: 100},
    Lastname: {type: String, required: true, max: 100},
    Cedula: {type: String, required: true, max: 100},
    Telephone: {type: Number, required: true, max: 100},
    Email: {type: Number, required: true, max: 100}
});

module.exports= mongoose.model(Persona, PersonaSchema)