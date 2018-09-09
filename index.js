const express = require('express');
const js = express();
const env = require('dotenv')
const bodyParser = require('body-parser');
const environment = process.env.NODE_ENV || 'development';

env.config();
js.set('port', (process.env.PORT || 5000));
js.use(bodyParser.json());

if (environment === 'development') {
	js.get('/env', function(req, res) {
		res.status(200).send(process.env);
	});
}

js.listen(js.get('port'), function() {
  console.log('JS services are running on port', js.get('port'));
});
