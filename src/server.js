const app = require('./app');

let port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`API esta rodando na port '${port}'`);
});