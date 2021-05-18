'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaymentRights extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {as: 'users'});
    }
  }
  PaymentRights.init(
    {
      staffId: DataTypes.INTEGER,
      access: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'PaymentRights',
      tableName: 'payment_rights',
      timestamps: true,
      defaultScope: {
        attributes: ['staffId', 'access', 'createdAt', 'updatedAt'],
      },
    }
  );
  return PaymentRights;
};
