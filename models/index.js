const User = require("./User");
const GroceryStores = require("./GroceryStore");
const Addresses = require("./Addresses");

User.hasMany(GroceryStores, {
  foreignKey: "store_id",
});

GroceryStores.belongsTo(User, {
  foreignKey: "store_id",
});

User.hasOne(Addresses, {
  foreignKey: "address_id",
});

Addresses.belongsTo(User, {
  foreignKey: "address_id",
});

module.exports = { User, GroceryStores, Addresses };