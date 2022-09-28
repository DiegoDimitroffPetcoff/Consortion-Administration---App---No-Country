const mongoose = require('mongoose');


const RolSchema = new mongoose.Schema({
    Name: {type: String, required: true, max: 100}

});

module.exports= mongoose.model(Rol, RolSchema)