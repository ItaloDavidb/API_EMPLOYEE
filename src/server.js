<<<<<<< HEAD
const App = require('./app');

const port = process.env.PORT;

App.listen(port || 3000, () =>
  console.log(`Servidor está rodando na porta ${port}`)
);
=======
const app = require('./app');

let port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`API esta rodando na port '${port}'`);
});
>>>>>>> 6829437e944d61454f4c4f63982e95b79d57da70
