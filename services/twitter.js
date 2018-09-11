const { Router } = require('express');
const Twit = require('twit');
const constants = require('../core/constants');
const path = `${constants.API_VERSION}/twitter`;

module.exports = (router = new Router()) => {
  router.get(path, (req, res) => {
    const twitterFeed = new Twit({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token: process.env.TWITTER_ACCESS_TOKEN,
      access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
      timeout_ms: 60*1000,
    });
    
    const params = {
      screen_name: 'JimmySynthetic',
      exclude_replies: true,
      include_rts: false,
      count: 20
    };
  
    twitterFeed.get('statuses/user_timeline', params, (error, tweets, response) => {
      if (!error) {
        res.status(200).json(tweets);
      } else {
        res.status(500).send(error);
      };
    });
  });

  return router

};
