const express = require('express');
const routes = require('./routes');

const app = express();

routes(app);

let port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`API esta rodando na port '${port}'`);
});

module.exports = app;