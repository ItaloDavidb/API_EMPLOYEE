const express = require('express');
const routes = require('./routes');
require('./infra/database/mongo');

class App {
  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }
  middleware() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
  }
  routes() {
    this.server.use(routes);
  }
}
module.exports = new App().server;