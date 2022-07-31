const { Cart } = require("../models");

async function getItems(user, products) {
  let hasProducts = 0;
  const cart = user?.id ? await Cart.findAll({
    where: {
      userId: user.id,
    },
  }).reduce((obj, cur) => {
    obj[cur.dataValues.productId] = cur.dataValues.quantity;
    return obj;
  }, {}) : {};

  const newProducts = (products || []).map((product) => {
    hasProducts = hasProducts += cart[product.id] || 0;
    return {
      ...product,
      quantity: cart[product.id] || 0,
    };
  });

  return { hasProducts, products: newProducts, user };
}

module.exports = { getItems };
