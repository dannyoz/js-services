const { Router } = require('express');
const constants = require('../core/constants');
const path = `${constants.API_VERSION}/dummy`;

module.exports = (router = new Router()) => {
  router.get(path, (req, res) => {
    res.status(200).json({derp: true});
  });
  return router
};
