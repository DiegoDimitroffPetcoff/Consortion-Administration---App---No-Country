const express = require("express");
const app = express();

const Controller = require('../controllers.js/mongo/controller')

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
    app.post("/add_apartment", this.Controller.add_apartment);

    return app;
  }
}

module.exports = Routes;
