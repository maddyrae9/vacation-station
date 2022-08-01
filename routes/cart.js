const { getItems, manageCart } = require("../controllers/cart");

const router = require("express").Router();

router.get("/cart", async (req, res) => {
  res.render(
    "shopping-cart",
    await getItems(req.session.user, req.session.products)
  );
});

router.post("/add-cart", async (req, res) => {
  const { product: productId, user: userId, quantity, from } = req.query;
  await manageCart(productId, userId, quantity);
  if (from === "cart") {
    res.redirect("/cart");
  } else {
    res.redirect("/shop");
  }
});

module.exports = router;
