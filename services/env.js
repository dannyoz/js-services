const { Router } = require('express');
const environment = process.env.NODE_ENV || 'development';
const response = (environment === 'development') ? process.env : {};
const error = require('../core/error');
const constants = require('../core/constants');
const path = `${constants.API_VERSION}/env`;

module.exports = (router = new Router()) => {
  router.get(path, (req, res) => {
    if (environment === 'development') {
      res.status(200).json(response);
    } else {
      res.status(403).json(error(403));
    }
  });
  return router
};
