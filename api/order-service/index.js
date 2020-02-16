const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const { db } = require("./setup/db");

// enabling cors
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// initiallizing models
require("./models/index");
//initiallizing routes
require("./routes/route")(app);

// syncing db
db.sync({ force: true }).then(() => {
  console.log("db synced succesfully");
});
app.listen(7002, () => {
  console.log("server is running on port", 7002);
});
