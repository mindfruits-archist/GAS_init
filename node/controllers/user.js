const User = require('../models/User')

exports.signup = (req, res, next) => {
  const user = new User({
    email: req.body.email,
    password: hash
  });
};
exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email }).then(
  ).catch(
    (error) => {
      res.status(500).json({
        error: error
      });
    }
  );
}
