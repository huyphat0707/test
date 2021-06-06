const {Question} = require('../models');

module.exports = {
  create: async (req, res) => {
    try {
      const {
        question,
        answerCorrect,
        inCorrectOne,
        inCorrectTwo,
        inCorrectThree,
      } = req.body;
      const {user} = req;
      const result = await Question.findOne({
        where: {question},
        attribute: [
          'question',
          'answerCorrect',
          'inCorrectOne',
          'inCorrectTwo',
          'inCorrectThree',
        ],
      });
      if (result) {
        return res
          .status(400)
          .send({success: false, message: 'Question does not exists!'});
      }
      const row = await Question.create({
        userId: user.id,
        question,
        answerCorrect,
        inCorrectOne,
        inCorrectTwo,
        inCorrectThree,
      });
      return res.send({success: true, message: 'create success', data: row});
    } catch (error) {
      return res.send({error: true, message: 'serve error!'});
    }
  },
  list: async (req, res) => {
    try {
      const row = await Question.findAll({});
      return res.send(row);
    } catch (error) {
      return res.status(400).send({success:false, message: "Serve Error!"})
    }
  },
};
