const homeRoutes = require('./routes');
// const sequelize = require('../config/connection');

function useRoutes(app) {
    app.use('/', homeRoutes);
    app.use('/register', homeRoutes);
    app.use('/login', homeRoutes);
    app.use('/logout', homeRoutes);
    app.use('/shop', homeRoutes);
    // app.use('/logout', logoutRoutes);
    // router.use('/dashboard', dashboardRoutes);
    // router.use('/api', grocerystores);
}

module.exports = useRoutes;