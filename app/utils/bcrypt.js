const bcrypt = require('bcrypt');

const saltRounds = 10;

class Bcrypt {
  hash(password) {
    return new Promise(async (resolve, reject) => {
      bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) reject(err);
        resolve(hash);
      });
    });
  }

  verify(password, hashPassword) {
    return new Promise(async (resolve, reject) => {
      bcrypt.compare(password, hashPassword, (err, same) => {
        if (err) reject(err);

        resolve(same);
      });
    });
  }
}

module.exports = new Bcrypt();
