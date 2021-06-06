'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {onDelete: 'CASCADE', as: 'user'});
    }
  }
  Question.init(
    {
      userId: DataTypes.INTEGER,
      question: DataTypes.STRING,
      answerCorrect: DataTypes.STRING,
      inCorrectOne: DataTypes.STRING,
      inCorrectTwo: DataTypes.STRING,
      inCorrectThree: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Question',
      tableName: 'questions',
      defaultScope: {
        attributes: [
          'question',
          'answerCorrect',
          'inCorrectOne',
          'inCorrectTwo',
          'inCorrectThree',
          'createdAt',
          'updatedAt',
        ],
      },
    }
  );
  return Question;
};
