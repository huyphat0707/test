'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Offers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Company);
      this.belongsTo(models.Products);
      this.belongsTo(models.User);

    }
  }
  Offers.init(
    {
      staffId: DataTypes.INTEGER,
      status: DataTypes.STRING,
      productId: DataTypes.INTEGER,
      companiesId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Offers',
      tableName: 'offers',
      timestamps: true,
      defaultScope: {
        attributes: [
          'staffId',
          'status',
          'productId',
          'companiesId',
          'createdAt',
          'updatedAt',
        ],
      },
    }
  );
  return Offers;
};
