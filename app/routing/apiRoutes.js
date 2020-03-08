// variables to link to friendlist data file
const friendList = require("../data/friend");

// routing
module.exports = function(app) {
    app.get("/friendlist/", function(req, res) {
        res.json(friendList);
    });

    app.post("/friendlist/", function(req, res) {
        console.log(req);
    })
}