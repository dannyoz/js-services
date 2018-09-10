const request = require("request");
const cheerio = require("cheerio");

const getTweets = () => {
  getSingleTweet();
};

const getSingleTweet = () => {
  const url = "https://twitter.com/JimmySynthetic";

  request.get(url).on("response", response => {
    console.log(response.statusCode); // 200
    console.log(response.headers["content-type"]); // 'image/png'
  });
};

getTweets();
