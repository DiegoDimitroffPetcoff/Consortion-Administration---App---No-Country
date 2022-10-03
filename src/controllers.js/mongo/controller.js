const container = require("../../Containers/mongo/container");
const Container = new container();
const dao = require("../../Daos/mongo/torres");
const Dao = new dao();
class Controller {
  constructor() {

  }

  async add_torre(req, res) {
    try {
      let object = { Name: req.params.name };
      let newTorre = await Dao.create(object);

      console.log(`Se ah agregado la torre: ${newTorre}`);
      let message = `Se ah agregado la torre: ${newTorre}`;
      return res.json(message);
    } catch (err) {
      console.log("ERROR");
      console.log(err);
    }
  }
}

module.exports = Controller;
