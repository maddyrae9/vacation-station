const { DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

module.exports = sequelize.define("cart", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    min: 0,
  },
  productId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
