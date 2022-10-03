const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Schema = require("../Models/ModeloPrueba");

class Routes {
  constructor() {}
  start() {
    app.get("/", async (req, res) => {
      try {
        let objetoEJEMPLO = await Schema.find({});
        console.log(objetoEJEMPLO);
        res.send(objetoEJEMPLO)
      } catch (err) {
        console.log("ERROR");
        console.log(err);
      }
    });

    app.get("/EJEMPLO", async (req, res) => {
        try {
console.log("EJEMPLO DE NUEVA RUTA")
res.send("FUnciona")
        } catch (err) {
          console.log("ERROR");
          console.log(err);
        }
      });


    return app;
  }
}

module.exports = Routes;
