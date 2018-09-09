const Twit = require('twit');

const twitterService = (req, res, next) => {

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
  next();
}

module.exports = twitterService;
