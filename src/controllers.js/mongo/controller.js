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
      let object = { Name: req.params.name ,
        id: req.body.id };
        console.log(object);
      let newTorre = await DaoTorre.create(object);

      console.log(`Se ah agregado la torre: ${newTorre}`);
      let message = `Se ah agregado la torre: ${newTorre}`;
      return res.json(message);
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

      console.log(`Se ah agregado el apartamenteo: ${newTorre}`);
      let message = `Se ah agregado el apartamenteo: ${newTorre}`;
      return res.json(message);
    } catch (err) {
      console.log("ERROR");
      console.log(err);
    }
  }


}

module.exports = Controller;
