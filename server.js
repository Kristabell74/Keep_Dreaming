require("dotenv").config();
const express = require("express");
const db = require("./models");
const app = express();
const exphbs = require("express-handlebars");
const mysql = require("mysql");

// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
//   db.sequelize.sync().then(() => {
//     app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
//   });
// } else {
//   connection = mysql.createConnection({
//     host: "z5zm8hebixwywy9d.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//     user: process.env.DB_USER,
//     password: process.env.DB_PW,
//     database: "o88phcvxkd4jboo6",
//   });
// }

const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
require("./routes/api-routes.js")(app);

// Starts the server to begin listening, and syncs our sequelize models to our DB
// =============================================================

db.sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});
