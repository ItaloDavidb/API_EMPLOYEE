const database = require('somewhere');
class Services {
  constructor(nameSchema) {
    this.nameSchema = nameSchema;
  }

  async createRecord(data) {
    return database[this.nameSchema].create(data);

  }

}



module.exports = Services;