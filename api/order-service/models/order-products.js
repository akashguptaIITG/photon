const { DataTypes } = require("sequelize");
const { db } = require("../setup/db");
const OrderProducts = db.define(
  "OrderProducts",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0.0
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  },
  {
    freezeTableName: true
  }
);
module.exports = { OrderProducts };
