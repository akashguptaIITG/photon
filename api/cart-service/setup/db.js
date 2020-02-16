const { Sequelize } = require("sequelize");

const db = new Sequelize({
  dialect: "sqlite",
  storage: "./data/cart.sqlite"
});
module.exports = {
  db
};
