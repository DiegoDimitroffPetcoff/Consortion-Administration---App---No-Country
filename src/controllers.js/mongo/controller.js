// const container = require("../../Containers/mongo/container");
// const Container = new container();

// DAOS//
const daoTorre = require("../../Daos/mongo/torres");
const DaoTorre = new daoTorre();

const daoApartamento = require("../../Daos/mongo/apartamentos");
const DaoDpto = new daoApartamento();

class Controller {
  constructor() {

  }

  async add_torre(req, res) {
    try {
      let object = { Name: req.params.name };
 
      let newTorre = await DaoTorre.create(object);

      return res.json(newTorre);
    } catch (err) {
      console.log("ERROR");
      console.log(err);
    }
  }

  

  async add_apartment(req, res) {

    try {
      let object = { 
        Propietario: req.body.Propietario,
        Torre:  req.body.Torre,
        Aviso_cobro: req.body.Aviso_cobro };
      let newTorre = await DaoDpto.create(object);

      return res.json(newTorre);
    } catch (err) {
      console.log("ERROR");
      console.log(err);
    }
  }


}

module.exports = Controller;
