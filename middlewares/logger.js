const morgan = require('morgan');
const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, '../logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

const accessLogStream = fs.createWriteStream(path.join(logsDir, 'access.log'), {
  flags: 'a',
});

const loger = morgan(':method :url :status :date[web]', {
  stream: accessLogStream,
});

module.exports = loger;
