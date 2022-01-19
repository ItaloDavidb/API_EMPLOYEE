const mongoose = require('mongoose');
require('dotenv').config();
class Database {
  constructor() {
    this.connect();
  }

  connect() {
    return mongoose.connect(process.env.DB_PATHDB)
      .then(console.log('Connected to DB'))
      .catch((err) => console.log(err));
  }
}

module.exports = new Database().connect();
