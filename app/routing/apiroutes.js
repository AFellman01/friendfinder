var friendsData = require("../data/friends.js");


// ROUTING
module.exports = function(app) {

    // So, if this works, like I know it doesn't, it'd get get the json sent back with the paremeter passed.
    app.get("/api/friends", function(req, res) {

        res.json(friendsData);
    });

    function findBestFriend(user) {
        var userScores = user.scores;
        //the max difference in score between two users for each question is 4. With ten questions, that means the maximum difference is 40.

        var maxDiff = 4 * 10;
        var winningFriend;
        // going through the array
        for (var i = 0; i < friendsData.length; i++) {
            var friendScores = friendsData[i].scores;
            var totalDiff = 0;
            // // iterate thru friend's scores
            for (var j = 0; j < friendScores.length; j++) {
                totalDiff = totalDiff + Math.abs(userScores[j] - friendScores[j]);
            }
            if (totalDiff <= maxDiff) {
                winningFriend = friendsData[i];
                maxDiff = totalDiff;
            }
        }
        return winningFriend;
    }

    // I don't know what this does, but when I commented it out the code stopped working. I assume this just handles the posting? 
    app.post("/api/friends", function(req, res) {
        var currentUser = req.body;
        var bestFriend = findBestFriend(currentUser);
        res.json(bestFriend);
        friendsData.push(currentUser);
    });


    // Clear data for friendsData
    app.post("/api/clear", function() {
        // Empty out the arrays of data
        friendsData = [];

        console.log(friendsData);
    });
};
