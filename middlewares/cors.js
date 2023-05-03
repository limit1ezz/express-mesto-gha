const {
  allowedCors,
  DEFAULT_ALLOWED_METHODS,
  statusCodes,
} = require('../utils/constants');

const cors = (req, res, next) => {
  const { method } = req;

  const requestHeaders = req.headers['access-control-request-headers'];

  if (method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.setHeader('Access-Control-Allow-Headers', requestHeaders);
    res.setHeader('Access-Control-Max-Age', '3600');
    return res.status(statusCodes.NO_CONTENT).send();
  }

  const { origin } = req.headers;

  if (allowedCors.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  return next();
};

module.exports = cors;
