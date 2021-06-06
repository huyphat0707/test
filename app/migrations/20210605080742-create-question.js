'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        type: Sequelize.INTEGER
      },
      question: {
        type: Sequelize.STRING,
      },
      answerCorrect: {
        type: Sequelize.STRING,
      },
      inCorrectOne: {
        type: Sequelize.STRING,
      },
      inCorrectTwo: {
        type: Sequelize.STRING,
      },
      inCorrectThree: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('questions');
  }
};