const mongoose = require('mongoose');

const TorreSchema = new mongoose.Schema({
    Name: {type: String, required: true, max: 100},
});

module.exports= mongoose.model("Torres", TorreSchema)