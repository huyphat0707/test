'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Question, {onDelete: 'CASCADE', as: 'questions'});
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: {type: DataTypes.INTEGER},
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      defaultScope: {
        attributes: [
          'name',
          'email',
          'password',
          'role',
          'createdAt',
          'updatedAt',
        ],
      },
    }
  );
  return User;
};
