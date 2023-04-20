const express = require('express');
const mongoose = require('mongoose');
const chalk = require('chalk');
const allRoutes = require('./routes/allRoutes');
const errorHandler = require('./middlewares/errorHandler');
const config = require('./configurations/config');
const loger = require('./middlewares/logger');

require('dotenv').config();

const app = express();

// Connect to database
mongoose.connect(config.dbURL);

// Connect logger
app.use(loger);

// Configure middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Configure user ID
app.use((req, res, next) => {
  req.user = {
    _id: '6439a6e65399547055505d0a',
  };
  next();
});

// Use all routes
app.use(allRoutes);

// Handle errors
app.use(errorHandler);

// Connect DB and start server
mongoose.connection.once('open', () => {
  console.log(chalk.blue('Mongoose connected'));
  app.listen(config.port, () => console.log(chalk.bgBlue(`Server started on port ${config.port}`)));
});

mongoose.connection.on('error', (err) => {
  console.error(chalk.red('Mongoose connection error:'), err);
});
