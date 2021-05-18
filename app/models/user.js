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
      this.belongsTo(models.Role, {as: 'roles'});
      this.hasOne(models.Offers, {
        onDelete: 'CASCADE',
        foreignKey: 'staffId',
        as: 'offers',
      });
      this.hasOne(models.Logs, {
        onDelete: 'CASCADE',
        foreignKey: 'userId',
        as: 'logs',
      });
      this.hasOne(models.PaymentRights, {
        onDelete: 'CASCADE',
        foreignKey: 'staffId',
        as: 'payment_rights',
      });
      this.hasOne(models.Payments, {
        onDelete: 'CASCADE',
        foreignKey: 'staffId',
        as: 'payments',
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      roleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users',
      timestamps: true,
      defaultScope: {
        attributes: [
          'name',
          'email',
          'password',
          'roleId',
          'createdAt',
          'updatedAt',
        ],
      },
    }
  );
  return User;
};
