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

//link route js pages-- TODO: verify paths, pretty sure I have to path out before I path in, have to rethink.
require("../../routing/apiRoutes")(app);
require("../../routing/htmlRoutes")(app);

// Create New Friend - takes in JSON input
app.post("/api/Friend", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newfriend = req.body;

  // Using a RegEx Pattern to remove spaces from newfriend
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newfriend);

  friend.push(newfriend);

  res.json(newfriend);
});


// switch on the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


