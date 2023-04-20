require('dotenv').config();

module.exports = {
  port: process.env.port || 3000,
  dbURL: process.env.DB_URL || 'mongodb://localhost:27017/mestodb',
};
