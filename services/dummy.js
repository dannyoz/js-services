const dummy = (req, res, next) => {
  res.status(200).json({derp: true});
  next();
};

module.exports = dummy;
