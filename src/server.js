const App = require('./app');

const port = process.env.PORT;

App.listen(port || 3000, () =>
  console.log(`Servidor está rodando na porta ${port}`)
);


