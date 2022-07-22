const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Users extends Model {}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    users_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
    address_id: {
      type: DataTypes.INTEGER,
      references:{
        model:"addresses",
        key:"id"
      }
    },
    



  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "groceryStores",
  }
);

module.exports =Users;