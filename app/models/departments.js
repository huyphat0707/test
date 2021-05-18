'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Departments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Company);
    }
  };
  Departments.init(
    {
      name: DataTypes.STRING,
      companiesId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Departments',
      tableName: 'departments',
      timestamps: true,
      defaultScope: {
        attributes: ['name', 'companiesId', 'createdAt', 'updatedAt'],
      },
    }
  );
  return Departments;
};