//load up modules used
const express = require("express");
const path = require("path");
//create express server
const app = express();
//create port chooser
const PORT = process.env.PORT || 8080;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Create New Friend - takes in JSON input
app.post("/api/Friend", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newFriend = req.body;

  // Using a RegEx Pattern to remove spaces from newfriend
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newFriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newFriend);

  friendsData.push(newFriend);

  res.json(newFriend);
});


// switch on the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


