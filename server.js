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


// switch on the server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


