const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Schema = require("../Models/AMINISTRADOR");

class Routes {
  constructor() {}
  start() {
    app.get("/", async (req, res) => {
      try {
        let objetoEJEMPLO = await Schema.find({});
        console.log(objetoEJEMPLO);
      } catch (err) {
        console.log("ERROR");
        console.log(err);
      }
    });
    return app;
  }
}

module.exports = Routes;
