var express = require("express");
var router = require("./controllers/burgers_controller.js");
var exphbs = require("express-handlebars");

var connection = mysql.createConnection(process.env.JAWSDB_URL);
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.

app.use(router);

// Start our server so that it can begin listening to client requests.
app.listen(connection);
