/ DEPENDENCIES
// Just a basic path file thing. Using the path npm. Which I still don't understand, but it does seem to do what we want? Maybe? Would it work without it? I don't have time to check!

var path = require('path');


// ROUTING
module.exports = function(app) {
    // When users click a page, ths should send them to it. 

    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/survey.html'));
    });



    // Sends us home if we can't find a matching page.
    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
};
