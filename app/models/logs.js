'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Logs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Discount, {as: 'discount'});
      this.belongsTo(models.User, {as: 'users'});
    }
  }
  Logs.init(
    {
      userId: DataTypes.INTEGER,
      discountId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Logs',
      tableName: 'logs',
      timestamps: true,
      defaultScope: {
        attributes: ['userId', 'discountId', 'createdAt', 'updatedAt'],
      },
    }
  );
  return Logs;
};
