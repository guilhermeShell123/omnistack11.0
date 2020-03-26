const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();


app.use(cors());//origin: 'http://minhaplicação.com
app.use(express.json());
app.use(routes);

console.log('aplicação iniciada');
app.listen(3333);