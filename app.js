const express = require('express');
const mongoose = require('mongoose');
const chalk = require('chalk');
const { errors } = require('celebrate');
const allRoutes = require('./routes/allRoutes');
const errorHandler = require('./middlewares/errorHandler');
const config = require('./configurations/config');
const loger = require('./middlewares/logger');
const limiter = require('./middlewares/limiter');
const configureHelmet = require('./middlewares/helmet');

require('dotenv').config();

// Get environment variables
const { NODE_ENV, DB_URL } = process.env;

const app = express();

// Connect to database
mongoose.connect(NODE_ENV === 'production' ? DB_URL : config.dbURL);

// Connect logger
app.use(loger);

// Configure middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(limiter);
configureHelmet(app);

// Use all routes
app.use(allRoutes);

// Handle errors
app.use(errors());
app.use(errorHandler);

// Connect DB and start server
mongoose.connection.once('open', () => {
  console.log(chalk.blue('Mongoose connected'));
  app.listen(config.port, () =>
    console.log(chalk.bgBlue(`Server started on port ${config.port}`)),
  );
});

mongoose.connection.on('error', (err) => {
  console.error(chalk.red('Mongoose connection error:'), err);
});
