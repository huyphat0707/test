'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Company);
      this.belongsTo(models.Products, {as: 'products'});
      this.belongsTo(models.User, {as: 'users'});
    }
  }
  Payments.init(
    {
      productId: DataTypes.INTEGER,
      staffId: DataTypes.INTEGER,
      price: DataTypes.DECIMAL,
      discount: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Payments',
      tableName: 'payments',
      timestamps: true,
      defaultScope: {
        attributes: [
          'productId',
          'staffId',
          'qty',
          'price',
          'discount',
          'createdAt',
          'updatedAt',
        ],
      },
    }
  );
  return Payments;
};
