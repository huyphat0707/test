'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Departments, {
        onDelete: 'CASCADE',
        foreignKey: 'companiesId',
        as: 'departments',
      });
      this.hasOne(models.Offers, {
        onDelete: 'CASCADE',
        foreignKey: 'companiesId',
        as: 'offers',
      });
      this.hasOne(models.Payments, {
        onDelete: 'CASCADE',
        foreignKey: 'companiesId',
        as: 'payments',
      });
    }
  };
  Company.init(
    {
      name: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Company',
      tableName: 'companies',
      timestamps: true,
      defaultScope: {
        attributes: ['name', 'type', 'createdAt', 'updatedAt'],
      },
    }
  );
  return Company;
};