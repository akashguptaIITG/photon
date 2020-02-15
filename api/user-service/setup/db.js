const { Sequelize } = require("sequelize");

const db = new Sequelize({
  dialect: "sqlite",
  storage: "./data/user.sqlite"
});
module.exports = {
  db
};
