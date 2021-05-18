'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Discount extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Products);
      this.hasOne(models.Logs, {
        onDelete: 'CASCADE',
        foreignKey: 'discountId',
        as: 'logs',
      });
    }
  }
  Discount.init(
    {
      productId: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
      discount: DataTypes.INTEGER,
      start_date: DataTypes.DATE,
      end_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Discount',
      tableName: 'tbl_discount',
      timestamps: true,
      defaultScope: {
        attributes: ['productId', 'discount', 'start_date', 'end_date', 'qty'],
      },
    }
  );
  return Discount;
};
