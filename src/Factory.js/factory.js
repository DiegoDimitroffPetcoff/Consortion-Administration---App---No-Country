const mongoose = require("mongoose");

const configs = require("../config.js/globals");

let instance = null;

class Factory {
  constructor() {}
  static getInstance(data) {
    if (!instance) {
      instance = new Factory();
      if (data == "mongo" || data == "file") {
        console.log(`Base de datos utilizada: ${data}`);
      }
    }
    return instance;
  }
  connection(data) {
    if (data == "file") {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });


    } else if (data == "mongo") {

      
      mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } else {
      console.log("Error en conexion de base de datos");
    }
  }


  
}

module.exports = Factory;