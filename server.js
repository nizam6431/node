const express = require('express'),
    bodyParser = require('body-parser'),
    db = require('./server/config/db'),
    router = require('./server/router/index'),
    app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Content-Type', 'application/json');
  next();
});

router(app, db);

const PORT = 8082;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log('Express listening on port:', PORT);
  });
});