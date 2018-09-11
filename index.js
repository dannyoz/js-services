// ------------------- Core ------------------------- //
const express = require('express');
const js = express();
const env = require('dotenv')
const bodyParser = require('body-parser');
// -------------------------------------------------- //

// ------------------- Config ----------------------- //
env.config();
js.set('port', (process.env.PORT || 5000));
js.use(bodyParser.json());
// -------------------------------------------------- //

// ------------------- Services --------------------- //
const dummyService = require('./services/dummy');
js.use(dummyService());

const envService = require('./services/env');
js.use(envService());

const twitterService = require('./services/twitter');
js.use(twitterService());
// -------------------------------------------------- //

js.listen(js.get('port'), function() {
  console.log('JS services are running on port', js.get('port'));
});
