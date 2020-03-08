// variables to link to friendlist data file
const friendList = require("../data/friend");

// routing
module.exports = function(app) {
    app.get("/api/friendlist/", function(req, res) {
        res.json(friendList);
    });

    app.post("/api/friendlist/", function(req, res) {
        // calculating match
        const user = { ...req.body, scores: req.body.scores.map(score => JSON.parse(score)) }
        let lowestScore = 9999;
        let closestFriendIndex = -1;
        
        for (let i = 0; i < friendList.length; i++) {
            let totalDiffScore = 0;
            for (let j = 0; j < 10; j ++) {
                totalDiffScore += Math.abs(friendList[i].scores[j] - user.scores[j]);
            };
            
            if (totalDiffScore < lowestScore) {
                lowestScore = totalDiffScore;
                closestFriendIndex = i;
            }
        };

        friendList.push(user);
        res.json({name: friendList[closestFriendIndex].name, photo: friendList[closestFriendIndex].photo});
    })
}