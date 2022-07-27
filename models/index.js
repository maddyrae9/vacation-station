const User = require("./User");
const GroceryStores = require("./GroceryStores");

User.hasMany(GroceryStores, {
  foreignKey: "gallery_id",
});

GroceryStores.belongsTo(User, {
  foreignKey: "gallery_id",
});

module.exports = { User, GroceryStores };