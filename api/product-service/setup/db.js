const { Sequelize } = require("sequelize");

const db = new Sequelize({
  dialect: "sqlite",
  storage: "./data/product.sqlite"
});
module.exports = {
  db
};
