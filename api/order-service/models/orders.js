const { DataTypes } = require("sequelize");
const { db } = require("../setup/db");
const Orders = db.define(
  "Orders",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM,
      values: ["placed", "pending", "shipped", "delivered", "cancelled"],
      allowNull: false,
      defaultValue: "placed",
      validate: {
        isIn: [["placed", "pending", "shipped", "delivered", "cancelled"]]
      }
    }
  },
  {
    freezeTableName: true
  }
);
module.exports = { Orders };
