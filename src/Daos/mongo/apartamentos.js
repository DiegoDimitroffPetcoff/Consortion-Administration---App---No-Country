const Container = require("../../Containers/mongo/container");

const Schema = require("../../Models/APARTAMENTO");

class Apartamento extends Container {
  constructor() {
    super(Schema);
    this.Schema = Schema;
  }
  async create(content) {
    let all = await this.read({});
    if (all[0] == undefined) {
      console.log("NULL");
      let id = 1;
      let object = {
        Propietario: content.Propietario,
        Torre: content.Torre,
        Aviso_cobro: content.Aviso_cobro,
        id: id,
      };
      console.log(object);
      let model = new this.Schema(object);
      return await model.save();
    } else {
      console.log("ELSE");
      let id = all.pop().id;
      id++;
      let object = {
        Propietario: content.Propietario,
        Torre: content.Torre,
        Aviso_cobro: content.Aviso_cobro,
        id: id,
      };
      console.log(object);
      let model = new this.Schema(object);
      return await model.save();
    }
  }
}

module.exports = Apartamento;
