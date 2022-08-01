const { getItems } = require("./shop");
const { Cart } = require("../models");

async function manageCart(productId, userId, quantity) {
  const item = await Cart.findOne({ where: { productId, userId } });
  if (item) {
    await item.update({ quantity: quantity });
  } else {
    await Cart.create({ productId, userId, quantity });
  }
}

module.exports = { getItems, manageCart };
