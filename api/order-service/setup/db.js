const { Sequelize } = require("sequelize");

const db = new Sequelize({
  dialect: "sqlite",
  storage: "./data/order.sqlite"
});
module.exports = {
  db
};
