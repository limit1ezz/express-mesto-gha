require('dotenv').config();

module.exports = {
  port: process.env.port || 3000,
  dbURL: 'mongodb://localhost:27017/mestodb',
  jwtSecret: 'super secret from backend',
};
