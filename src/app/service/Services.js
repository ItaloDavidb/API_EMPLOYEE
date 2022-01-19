const database = require('../repository');

class Services {
  constructor(nameSchema) {
    this.nameSchema = nameSchema;
  }

  async createRecord(data) {
    return await database[this.nameSchema].create(data);
  }

  async catchAllRecord() {
    return await database[this.nameSchema].find({});
  }

  
}



module.exports = Services;