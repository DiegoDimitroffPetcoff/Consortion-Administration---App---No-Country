
class Container {
  constructor(Schema) {
    this.Schema = Schema;
  }
  async create(content) {
    let model = new this.Schema(content);
    return await model.save();
  }
  async read() {
    return await this.Schema.find({});

  }
  update() {
    let empty = "empty";
  }
  delete() {
    let empty = "empty";
  }
}

module.exports = Container;
