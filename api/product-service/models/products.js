const { DataTypes } = require("sequelize");
const { db } = require("../setup/db");
const Products = db.define(
  "Products",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0
    },
    status: {
      type: DataTypes.ENUM,
      values: ["available", "na"],
      allowNull: false,
      defaultValue: "availabSle",
      validate: {
        isIn: [["available", "na"]]
      }
    }
  },
  {
    freezeTableName: true
  }
);
module.exports = { Products };
