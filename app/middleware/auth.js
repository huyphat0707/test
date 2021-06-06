const {verify} = require('../utils/jwt');

module.exports = {
  authenticate: (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split('Bearer ')[1];
    if (token == null) {
      return res.status(401).send({success: false, message: 'Unauthorized'});
    }
    const result = verify(token);
    if (!result) {
      return res.status(401).send({
        success: false,
        message: 'Unauthorized',
      });
    }

    req.user = result;
    next();
  },
};
