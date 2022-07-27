const User = require("./User");
const GroceryStores = require("./GroceryStores");
const homeRoutes = require('./home-routes.js');
//const dashboardRoutes = require('./dashboard-routes.js');

router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', grocerystores);

module.exports = { User, GroceryStores };