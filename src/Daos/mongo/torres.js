const Container = require("../../Containers/mongo/container");

const Schema = require("../../Models/TORRE");

class Torres extends Container {
  constructor() {
    super(Schema);
    this.Schema = Schema;
  }
  async save(content) {
    let obj = { title: content.title, price: content.price, id: content.id };
    console.log(obj);
    let createModel = new this.Schema(obj);
    return await createModel.save();
  }

  async read() {
    return await this.Schema.find({});
  }

  async getById(x) {
    try {
      let usuario = await this.Schema.find({ id: x }, { _id: 0 });
      return usuario[0];
    } catch (error) {
      console.log(error);
    }
    return object;
  }

  async Delete(element) {
    return await this.Schema.deleteOne({ id: element.id });
  }

  async Update(object, id) {
    return await this.Schema.updateOne(
      {
        id: id,
      },
      { $set: { title: object.title, price: object.price } }
    );
  }

  async create(content) {
    let all = await this.read({});
    if (all[0] == undefined) {
      console.log("NULL");
      let id = 1;
      let object = {
        Name: content.Name,   
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
        Name: content.Name,   
        id: id,
      };
      console.log(object);
      let model = new this.Schema(object);
      return await model.save();
    }
  }
}

module.exports = Torres;
