var db = require("../models");
var passport = require("../config");


module.exports = function (app) {

    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        res.json(req.user);
    });

    app.post("/api/signup", function (req, res) {
        db.User.create({
            email: req.body.email,
            password: req.body.password
        })
            .then(function () {
                res.redirect(307, "/api/login");
            })
            .catch(function (err) {
                res.status(401).json(err);
            });
    });

    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/");
    });

    app.get("/api/user_data", function (req, res) {
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                email: req.user.email,
                id: req.user.id
            });
        }
    });

    // Get all the users
    app.get("/api/users", function (req, res) {
        db.User.findAll({
            // include: [db.Shoppingcart, db.Purchase]
            include: [{
                model: db.Shoppingcart,
                include: db.grocerystores
            }, {
                model: db.Purchase,
                include: db.grocerystores
            }]
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    /* 
    [
        {
            "id": 1,
            "name": "Juan",
            "email": "juan@email.com",
            "password": "password",
            "ShoppingcartId": null,
            "PurchaseId": null,
            "Shoppingcart": null,
            "Purchases": []
        },
    ]
    */



    // Get one user by its id
    app.get("/api/users/:id", function (req, res) { // Missing: user and password validation
        db.User.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: db.Shoppingcart,
                include: [db.Shoppingcart_grocerystores]
            }, {
                model: db.Purchase,
                include: [db.Purchase_grocerystores]
            }]
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    /* 
    {
        "id": 1,
        "name": "Juan",
        "email": "juan@email.com",
        "password": "password",
        "ShoppingcartId": null,
        "PurchaseId": null,
        "Shoppingcart": null,
        "Purchases": []
    }
    */



    // Create a new user - For Sign Up
    app.post("/api/users", function (req, res) {
        db.User.create(req.body).then(function (dbUser) {
            console.log('In .POST /api/users - create()');
            console.log('req.body: ', req.body);
            console.log('dbUser: ', dbUser);
            res.json(dbUser);
        });
    });

    /* 
    {
        "id": 4,
        "name": "4",
        "email": "4@email.com",
        "password": "4",
        "ShoppingcartId": null,
        "PurchaseId": null,
    }
    */


    // Update an user by its id
    app.put("/api/users", function (req, res) {
        db.User.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbUser) {
                console.log('In .PUT /api/users - update()');
                console.log('req.body: ', req.body);
                console.log('dbUser: ', dbUser);
                res.json(dbUser);
            });
    });

    /* 
    [
        1
    ]
    */


    // Delete an user by its id
    app.delete("/api/users/:id", function (req, res) {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbUser) {
            console.log('In .DELETE /api/users - destroy()');
            console.log('req.body: ', req.body);
            console.log('dbUser: ', dbUser);
            res.json(dbUser);
        });
    });

    /* 
        1
    */

};