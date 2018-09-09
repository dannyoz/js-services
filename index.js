// ------------------- Core ------------------------- //
const express = require('express');
const js = express();
const env = require('dotenv')
const bodyParser = require('body-parser');
const apiVersion = '/api/v1';
// -------------------------------------------------- //

// ------------------- Config ----------------------- //
env.config();
js.set('port', (process.env.PORT || 5000));
js.use(bodyParser.json());
// -------------------------------------------------- //

// ------------------- Services --------------------- //
const dummyService = require('./services/dummy');
js.use(`${apiVersion}/dummy`, dummyService);

const envService = require('./services/env');
js.use('/env', envService);

const twitterService = require('./services/twitter');
js.use(`${apiVersion}/twitter`, twitterService);
// -------------------------------------------------- //

js.listen(js.get('port'), function() {
  console.log('JS services are running on port', js.get('port'));
});
