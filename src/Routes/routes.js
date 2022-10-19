const express = require("express");
const app = express();
const Schema = require("../Models/ModeloPrueba");
const Controller = require('../controllers.js/mongo/controller')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));

class Routes {
  constructor() {
  this.Controller = new Controller()}
  start() {
    app.get("/", async (req, res) => {
      try {
        let objetoEJEMPLO = await Schema.find({});
        console.log(objetoEJEMPLO);
        res.send(objetoEJEMPLO);
      } catch (err) {
        console.log("ERROR");
        console.log(err);
      }
    });

    app.get("/add_torre/:name", this.Controller.add_torre);
    app.get("/getTorres", this.Controller.getTorres);


    app.post("/add_apartment", this.Controller.add_apartment);
    app.get("/getApartment", this.Controller.getApartments);

    return app;
  }
}

module.exports = Routes;
