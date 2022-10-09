const Container= require('../../Containers/mongo/container')

const Schema = require('../../Models/APARTAMENTO');

class Apartamento extends Container {
    constructor(){
        super(Schema);
        this.Schema = Schema
    }
    async create(content){
        

        let model = new this.Schema(content);
        return await model.save();             
    }

}

module.exports = Apartamento