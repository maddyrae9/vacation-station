const Address = require("ipaddr.js");
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
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
    },
   
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "groceryStores",
  }
);

module.exports = Addresses;