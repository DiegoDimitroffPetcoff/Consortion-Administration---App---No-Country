const mongoose = require("mongoose");
const Schema = require("../../Models/TORRE");

class Controller {
  constructor() {}

  async add_torre(req, res) {
    try {
      let object = { Name: req.params.name };
      let newTorre = new Schema(object);
      await newTorre.save();
      console.log(`Se ah agregado la torre: ${newTorre}`)
      let message = `Se ah agregado la torre: ${newTorre}`;
      return res.json(message);
    } catch (err) {
      console.log("ERROR");
      console.log(err);
    }
  };

}

module.exports = Controller