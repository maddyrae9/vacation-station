const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Addresses extends Model {}

Addresses.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    address_one: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address_two: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "dish",
  }
);

module.exports = Addresses;
