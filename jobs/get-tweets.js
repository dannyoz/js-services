const request = require("request");
const cheerio = require("cheerio");

const getTweets = () => {
  const url = "https://twitter.com/JimmySynthetic";

  request(url, (err, res, html) => {
    if (!err) {
      const $ = cheerio.load(html);
      const $tweets = $(".tweet");

      $tweets.each((i, ele) => {
        const $tweet = $(ele);
        const tweetText = $tweet.find(".tweet-text").first();
        
        $tweet.find('.tweet-text .twitter-timeline-link').remove();
        console.log(tweetText.text());
      });
    }
  });
};

getTweets();
