const mongoose = require('mongoose');
require('dotenv').config()



console.log(configs.MONGO_URI);

mongoose.connect('mongodb+srv://diegodimii:Astronomico1@cluster0.99hplt2.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
} );

const PersonaSchema = new mongoose.Schema({
    Name: {type: String, required: true, max: 100},
    Lastname: {type: String, required: true, max: 100},
    Cedula: {type: String, required: true, max: 100},
    Telephone: {type: Number, required: true, max: 100},
    Email: {type: Number, required: true, max: 100}
});

module.exports= mongoose.model(Persona, PersonaSchema)