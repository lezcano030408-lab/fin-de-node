const express = require('express');
const app = express();

const notasRoutes = require('./routes/notas.routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/', notasRoutes);

module.exports = app;