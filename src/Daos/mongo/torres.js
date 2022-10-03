const Container= require('../../Containers/mongo/container')

const Schema = require('../../Models/TORRE');

class Torres extends Container {
    constructor(){
        super(Schema);
        this.Schema = Schema
    }
    async create(content){
        let objeto = {"Name": "ejemplo"}
        let model = new this.Schema(content);
        return await model.save();             
    }

}

module.exports = Torres