// starting variables
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

// setting up express
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// connecting the routes
require("./app/routing/apiRoutes");
require("./app/routing/htmlRoutes");

// adding a listener to check that it's running
app.listen(PORT, function() {
    console.log("App listening at localhost:" + PORT);
});