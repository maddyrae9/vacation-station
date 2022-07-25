const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class GroceryStores extends Model {}

GroceryStores.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    grocerystore_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "groceryStores",
  }
);

module.exports = GroceryStores;