const question = require('./question');
const auth = require('./auth');
module.exports = (app) => {
  app.use('/auth', auth);
  app.use('/question', question);
};
