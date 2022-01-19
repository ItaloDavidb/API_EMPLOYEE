const App = require('./app');
const port = process.env.DB_PORT;

App.listen(port || 3000, () =>
  console.log(`Server is running on port ${port}`)
);
