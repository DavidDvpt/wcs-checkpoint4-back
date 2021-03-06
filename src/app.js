const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
require('dotenv').config();

const middlewares = require('./middlewares');

// routes
const routes = require('./routes');

const app = express();

// création du fichier de documentation
// expressJSDocSwagger(app)(swaggerOptions);

app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());

app.use('/api/v1', routes);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
