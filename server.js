const path = require("path");
const express = require("express");
//const session = require("express-session");
const expreshbs = require('express-handlebars');
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

const sequelize = require("./config/connection");
//const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
};

//app.use(session(sess));

const helpers = require("./Utils/helpers");
const addProducts = require("./middleware/addProducts");
const exphbs = require("exphbs");

//const hbs = exphbs.engine({ helpers });

//app.engine('.hbs', exphbs.engine({ extname:'.hbs'}));
app.set("view engine", "hbs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(async (req, res, next) => await addProducts(req, next));
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes").forEach((route) => app.use("/", route));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT);
  console.log("==> Visit http://localhost:3000 in your browser.", PORT, PORT);
});
