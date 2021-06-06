const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;

class JWT {
  sign(payload) {
    const option = {
      expiresIn: '30d',
    };
    const token = jwt.sign(payload, secretKey, option);
    return token;
  }

  verify(token) {
    try {
      const decoded = jwt.verify(token, secretKey);
      return decoded;
    } catch (err) {
      return false;
    }
  }
}

module.exports = new JWT();
