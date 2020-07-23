const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser');

process.on('unhandledRejection', error => {
  console.error('unhandledRejection', JSON.stringify(error), error.stack);
  process.exit(1);
});
process.on('uncaughtException', error => {
  console.log('uncaughtException', JSON.stringify(error), error.stack);
  process.exit(1);
});
process.on('beforeExit', () => {
  app.close((err) => {
    if (err) console.error(JSON.stringify(err), err.stack);
  });
});

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/projects', require('./routes/project.routes.js'));
app.use('/', (req, res) => { res.redirect('/projects'); });

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(500).send('Something Broke!');
});
app.set('x-powered-by', false);

const server = app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});

module.exports = server;