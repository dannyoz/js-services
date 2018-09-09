const environment = process.env.NODE_ENV || 'development';
const response = (environment === 'development') ? process.env : {};

const envService = (req, res, next) => {
  if (environment === 'development') {
    res.status(200).json(response);
  } else {
    res.status(403);
  }
  next();
};

module.exports = envService;
