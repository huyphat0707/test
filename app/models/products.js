'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Offers, {
        onDelete: 'CASCADE',
        foreignKey: 'productId',
        as: 'offers',
      });
      this.hasOne(models.Discount, {
        onDelete: 'CASCADE',
        foreignKey: 'productId',
        as: 'discount',
      });
      this.hasOne(models.Payments, {
        onDelete: 'CASCADE',
        foreignKey: 'productId',
        as: 'payments',
      });
    }
  };
  Products.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL,
      totalPrice: DataTypes.DECIMAL,
    },
    {
      sequelize,
      modelName: 'Products',
      tableName: 'products',
      timestamps: true,
      defaultScope: {
        attributes: ['name', 'price', 'totalPrice', 'createdAt', 'updatedAt'],
      },
    }
  );
  return Products;
};