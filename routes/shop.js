const router = require("express").Router();
const { getItems } = require("../controllers/shop");

router.get("/shop", async (req, res) => {
  res.render("shop", await getItems(req.session.user, req.session.products));
});

module.exports = router;
