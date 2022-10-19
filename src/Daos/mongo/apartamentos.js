const Container = require("../../Containers/mongo/container");

const Schema = require("../../Models/APARTAMENTO");
const torre = require("./torres");
const Torre = new torre();

class Apartamento extends Container {
  constructor() {
    super(Schema);
    this.Schema = Schema;
  }
  async create(content) {
    let all = await this.read({});
    if (all[0] == undefined) {

      let id = 1;
      let torre = await Torre.getByName(content.Torre);

      if (torre == null) {
        return "EL NOMBRE DE LA TORRE ES INCORRECTO O NO EXISTE"
      } else {
        // Se crea el departamento a persistir en DBS
      let object = {
        Propietario: content.Propietario,
        Aviso_cobro: content.Aviso_cobro,
        id: id,
        Torre:content.Torre
      };
      // Se agrega la Torre y se guarda el departamento creado
      torre.apartamentos = torre.apartamentos.concat(object);
      let torreUpdate = await Torre.Update(torre, torre.id);
      let model = new this.Schema(object);
      return await model.save();
      }
    } else {
 
      // validacion para cuando ya existen obejtos en DBS, elige el ultimo id
      let id = all.pop().id;
      console.log("IDDDD QUE BUSCO",id);
      id++;
      // Recupera la torre a la que el departamento creado va a pertenecer
      console.log(content);
      let torre = await Torre.getByName(content.Torre);
      if (torre == null) {
        return "EL NOMBRE DE LA TORRE ES INCORRECTO O NO EXISTE"
      } else {
        // Se crea el departamento a persistir en DBS
      let object = {
        Propietario: content.Propietario,
        Aviso_cobro: content.Aviso_cobro,
        id: id,
        Torre:content.Torre
      };
      // Se agrega la Torre y se guarda el departamento creado
      torre.apartamentos = torre.apartamentos.concat(object);
      let torreUpdate = await Torre.Update(torre, torre.id);
      let model = new this.Schema(object);
      return await model.save();
      }
    }
  }
  async read() {
    return await Schema.find({});
  }
}

module.exports = Apartamento;

