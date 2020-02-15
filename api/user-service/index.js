const { db } = require("./setup/db");
require("./models/index");

db.sync().then(() => {
  console.log("models synced");
  console.log(db.models);
});
