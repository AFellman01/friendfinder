// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");


// Set initial port
var PORT = process.env.PORT || 8080;

// Man, I still can't see the difference, but I guess it matters?
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Points server to CSS and JS static route files
app.use(express.static(path.join(__dirname + '/app/public')));

// Points server to route files
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// LISTENER: "starts" our server and listens for an event. I just took this from another project. So... yeah. I'm not proud.
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
