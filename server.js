// starting variables
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

// setting up express
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// connecting the routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// adding a listener to check that it's running
app.listen(PORT, function() {
    console.log("App listening at localhost:" + PORT);
});