const express = require('express');
<<<<<<< HEAD
const routes = require('./routes');
=======
const router = require('./routes');
>>>>>>> 6829437e944d61454f4c4f63982e95b79d57da70
require('./infra/database/mongo');

class App {
  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }
<<<<<<< HEAD
  middleware() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
  }
  routes() {
    this.server.use(routes);
  }
}
=======

  middleware() {
    this.server.use(express.json());
  }

  routes() {
    router(this.server)
  }
}

>>>>>>> 6829437e944d61454f4c4f63982e95b79d57da70
module.exports = new App().server;