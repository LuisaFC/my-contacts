/* eslint-disable no-console */

const express = require('express');
require('express-async-error');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
  console.log('ERROR HANDLER ->', error);
  response.sendStatus(500);
});

app.listen(3005, () => console.log('🔥 Server started at http://localhost:3000/'));
