// require the express npm
const express = require('express');

var PORT = process.env.PORT || 3000;

var app = express();

// parse the req.body as a json to make it readable
app.use(express.urlencoded( { extended: true } ));
app.use(express.json());

// set up handlebars
var exphbrs = require('express-handlebars');

// set the engine for the app to be handlebars
app.engine("handlebars", exphbrs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// import the routes
var routes = require("./controllers/burger_controller.js");

// give the server access to the routes
app.use(routes);

// have the server listen on the PORT
app.listen(PORT, function() {
    console.log("App listening at localhost:" + PORT);
});