const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const { errors } = require('celebrate');
const app = express();


app.use(cors());//origin: 'http://minhaplicação.com
app.use(express.json());
app.use(routes);
app.use(errors());

console.log('aplicação iniciada');
module.exports = app;